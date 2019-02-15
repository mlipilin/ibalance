export default function(styles, classes, className) {
    return [...classes.split(' ').map(c => styles[c]), className].filter(c => !!c).join(' ');
}
