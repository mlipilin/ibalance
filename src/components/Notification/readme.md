## Usage

Basic notification

```javascript
<NotificationWrapper position="top-right">
    <Notification
        description="Some long or short notification description"
        size="m"
        title="Warning!"
        type="danger"
    />
</NotificationWrapper>
```

Notification withOUT description

```javascript
<NotificationWrapper>
    <Notification title="Some title" type="info" />
</NotificationWrapper>
```

Notification withOUT closing button

```javascript
<NotificationWrapper>
    <Notification
        canClose={false}
        description="Some long or short notification description"
        size="s"
        title="Data is successfully saved"
        type="success"
    />
</NotificationWrapper>
```

Notification with automatically closing (after 10 seconds)

```javascript
<NotificationWrapper>
    <Notification
        closeAfter={10}
        description="Some long or short notification description"
        size="m"
        title="Warning!"
        type="danger"
    />
</NotificationWrapper>
```

## Possible CSS Selectors (Wrapper)

`.ib-notification-wrapper`

#### By position

`.ib-notification-wrapper_position_bottom-center`

`.ib-notification-wrapper_position_bottom-left`

`.ib-notification-wrapper_position_bottom-right`

`.ib-notification-wrapper_position_top-center`

`.ib-notification-wrapper_position_top-left`

`.ib-notification-wrapper_position_top-right`

## Possible CSS Selectors (Notification)

`.ib-notification`

#### By size

`.ib-notification_size_s`

`.ib-notification_size_m`

`.ib-notification_size_l`

#### By type

`.ib-notification_type_danger`

`.ib-notification_type_info`

`.ib-notification_type_success`

`.ib-notification_type_warning`

#### Booleans

`.ib-input__input_closing`

### Title

`.ib-notification__title`

#### By size

`.ib-notification__title_size_s`

`.ib-notification__title_size_m`

`.ib-notification__title_size_l`

### Description

`.ib-notification__description`

#### By size

`.ib-notification__description_size_s`

`.ib-notification__description_size_m`

`.ib-notification__description_size_l`

### Close

`.ib-notification__close`

#### By size

`.ib-notification__close_size_s`

`.ib-notification__close_size_m`

`.ib-notification__close_size_l`

## Initial LESS

```less
// Wrapper
.ib-notification-wrapper {
    // Position
    &_position_bottom-center {
    }
    &_position_bottom-left {
    }
    &_position_bottom-right {
    }
    &_position_top-center {
    }
    &_position_top-left {
    }
    &_position_top-right {
    }
}

// Notification
.ib-notification {
    // Size
    &_size_s {
    }
    &_size_m {
    }
    &_size_l {
    }

    // Type
    &_type_danger {
    }
    &_type_info {
    }
    &_type_success {
    }
    &_type_warning {
    }

    // Closing
    &_closing {
    }
}

// Title
.ib-notification__title {
    // Size
    &_size_s {
    }
    &_size_m {
    }
    &_size_l {
    }
}

// Description
.ib-notification__description {
    // Size
    &_size_s {
    }
    &_size_m {
    }
    &_size_l {
    }
}

// Close
.ib-notification__close {
    // Size
    &_size_s {
    }
    &_size_m {
    }
    &_size_l {
    }
}
```
