const jsonfile = require('jsonfile');
const path = require('path');
const sh = require('shelljs');

const PACKAGE_FILE = path.join(__dirname, 'package.json');

function execCommand(command) {
    return new Promise((resolve, reject) => {
        sh.exec(command, (code, stdout, stderr) => {
            if (code !== 0) {
                reject({ stdout, stderr });
            } else {
                resolve(stdout);
            }
        });
    });
}

function getLatestCommitMessageType() {
    return execCommand('git log -1 --pretty=%B').then(stdout => {
        if (/major\([\s\S]*\)\:/.test(stdout)) {
            return 'major';
        } else if (/minor\([\s\S]*\)\:/.test(stdout)) {
            return 'minor';
        } else if (/patch\([\s\S]*\)\:/.test(stdout)) {
            return 'patch';
        } else {
            return 'nopublish';
        }
    });
}

function getCurrentNpmVersion() {
    return execCommand('npm view ibalance versions --json').then(stdout => {
        const versions = JSON.parse(stdout);
        return versions[versions.length - 1];
    });
}

// type: major | minor | patch | nopublish
function upVersion(currentVersion, type) {
    const [major, minor, patch] = currentVersion.split('.').map(p => Number(p));

    switch (type) {
        case 'major':
            return [major + 1, 0, 0].join('.');
        case 'minor':
            return [major, minor + 1, 0].join('.');
        case 'patch':
            return [major, minor, patch + 1].join('.');
        default:
            return currentVersion;
    }
}

function changePackageJSON(data) {
    const fileData = jsonfile.readFileSync(PACKAGE_FILE);
    jsonfile.writeFileSync(PACKAGE_FILE, { ...fileData, ...data }, { spaces: 4 });
}

function publishToNpm(newVersion) {
    console.log('publish version', newVersion, '!');
    // changePackageJSON({ version: newVersion });
    // return execCommand('npm publish')
    //     .then(stdout => {
    //         changePackageJSON({ version: '0.0.0' });
    //     })
    //     .catch(error => {
    //         changePackageJSON({ version: '0.0.0' });
    //         throw error;
    //     });
}

async function publish() {
    const type = await getLatestCommitMessageType();

    if (type !== 'nopublish') {
        try {
            const currentVersion = await getCurrentNpmVersion();
            const newVersion = upVersion(currentVersion, type);
            await publishToNpm(newVersion);
        } catch (error) {
            console.error('error', error);
        }
    } else {
        console.log('nopublish');
    }
}

publish();
