## Usage

Input with placeholder (NO label):

```javascript
<Input
    size="s"
    placeholder="First Name"
    value={firstName}
    onBlur={_ => _}
    onChange={_ => _}
    onFocus={_ => _}
/>
```

Input with label (NO placeholder):

```javascript
<Input
    label="First Name"
    size="s"
    value={firstName}
    onBlur={_ => _}
    onChange={_ => _}
    onFocus={_ => _}
/>
```

## Possible CSS Selectors

`.ib-input`

### Label

`.ib-input__label`

### Label text

`.ib-input__label-text`

#### Booleans

`.ib-input__label-text_place_top`

#### By size

`.ib-input__label-text_size_s`

`.ib-input__label-text_size_m`

`.ib-input__label-text_size_l`

### Input

`.ib-input__input`

#### Booleans

`.ib-input__input_error`

`.ib-input__input_success`

#### By size

`.ib-input__input_size_s`

`.ib-input__input_size_m`

`.ib-input__input_size_l`

### Error

`.ib-input__error`

#### By size

`.ib-input__error_size_s`

`.ib-input__error_size_m`

`.ib-input__error_size_l`
