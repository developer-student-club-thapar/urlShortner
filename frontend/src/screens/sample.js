<form noValidate autoComplete="off">
  <FormControl>
    <MaterialHelperTextBox
      inputStyle="Enter the URL"
      style={{
        height: 62,
        width: 650,
        position: 'absolute',
        left: 300,
        top: 60,
        borderRadius: 100,
      }}
      value={this.state.longUrl}
      onChange={this.handleChange}
    ></MaterialHelperTextBox>
    <TextField
      select
      label="Domain"
      style={{
        height: 62,
        position: 'absolute',
        width: 120,
        top: 60,
        background: 'rgba(230, 230, 230, 0.88)',
        disableUnderline: true,
        left: 970,
      }}
      required
      value={this.state.keyword}
      onChange={this.handleKeyword}
      variant="filled"
    >
      {keywords.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <span style={{ fontWeight: '100' }}>
      <Button
        onClick={this.handleCustomurl}
        style={{
          top: 140,
          left: 400,
          color: 'inherit',
        }}
      >
        Custom Url ?
      </Button>
    </span>
    {cusUrlCheck && (
      <Fade in={cusUrlCheck}>
        <TextField
          label="Custom url"
          value={this.state.customUrl}
          onChange={this.handleCustomurl}
          style={{
            height: 62,
            position: 'absolute',
            width: 200,
            top: 140,
            background: 'rgba(230, 230, 230, 0.88)',
            disableUnderline: true,
            left: 600,
          }}
          variant="filled"
        ></TextField>
      </Fade>
    )}
  </FormControl>
  <MaterialButtonSuccess
    style={{
      height: 62,
      width: 138,
      position: 'absolute',
      left: 1095,
      top: 60,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'rgba(1, 87, 155, 100)',
    }}
    onClick={this.handleSubmit}
  ></MaterialButtonSuccess>
</form>;

{
  error && (
    <Snackbar
      open={error}
      TransitionComponent={Zoom}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={6000}
      onClose={this.handleClose}
    >
      <Alert onClose={this.handleClose} severity="warning" variant="filled">
        {this.state.error}
      </Alert>
    </Snackbar>
  );
}

{
  submitButton && (
    <Fade in={submitButton}>
      <Rect7>
        <MaterialUnderlineTextbox
          style={{
            height: 49,
            width: 398,
            position: 'absolute',
            left: 472,
            top: 286,
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,1)',
            borderStyle: 'solid',
          }}
          inputStyle="Short url"
          value={this.state.shortUrl}
        />
        <CopyToClipboard text={this.state.shortUrl}>
          <FileCopyOutlinedIcon
            fontSize="medium"
            onClick={this.handleCopy}
            style={{
              position: 'absolute',
              left: 782,
              top: 295,
              elevation: 0,
              cursor: 'pointer',
              color: '#263238',
              cursorText: 'copy',
            }}
          />
        </CopyToClipboard>

        <CropFreeIcon
          fontSize="medium"
          onClick={this.handleQr}
          style={{
            position: 'absolute',
            left: 822,
            top: 295,
            elevation: 0,
            cursor: 'pointer',
            color: '#263238',
            cursorText: 'QR',
          }}
        />
      </Rect7>
    </Fade>
  );
}
{
  copyAlert && (
    <Snackbar
      open={copyAlert}
      TransitionComponent={Zoom}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={6000}
      onClose={this.handleClose}
    >
      <Alert variant="filled" severity="info" onClose={this.handleClose}>
        Copied to Clipboard !
      </Alert>
    </Snackbar>
  );
}
{
  qrButton && (
    <Zoom in={qrButton}>
      <QRCode
        value={this.state.shortUrl}
        style={{
          position: 'absolute',
          left: 1100,
          top: 181,
        }}
      />
    </Zoom>
  );
}
