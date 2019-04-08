import Button from './components/Button';
import Icon from './components/Icon';
import Input from './components/Input';
import { Notification, Wrapper as NotificationWrapper } from './components/Notification';
import Spin from './components/Spin';

import ThemeProvider, { useTheme } from './theme-provider';

import './themes/default/index.less';

export { Button, Icon, Input, Notification, NotificationWrapper, Spin, ThemeProvider, useTheme };
export default {
    Button,
    Icon,
    Input,
    Notification,
    NotificationWrapper,
    Spin,
    ThemeProvider,
    useTheme,
};
