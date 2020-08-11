// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
    config: {

      // choose either `'stable'` for receiving highly polished,
      // or `'canary'` for less polished but more frequent updates
      updateChannel: "stable",

      // default font size in pixels for all tabs
      fontSize: 16,

      // font family with optional fallbacks
      // fontFamily:
      //   '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

      fontFamily: '"Source Code Pro for Powerline", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

      // default font weight: 'normal' or 'bold'
      fontWeight: "normal",

      // font weight for bold characters: 'normal' or 'bold'
      fontWeightBold: "bold",

      // line height as a relative unit
      lineHeight: 1,

      // letter spacing as a relative unit
      letterSpacing: 0,

      // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
      cursorColor: "#ffc600",

      // terminal text color under BLOCK cursor
      cursorAccentColor: "#000",

      // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
      cursorShape: "BLOCK",

      // set to `true` (without backticks and without quotes) for blinking cursor
      cursorBlink: true,

      // color of the text
      foregroundColor: "#fff",

      // terminal background color
      // opacity is only supported on macOS
      backgroundColor: "#000",

      // terminal selection color
      selectionColor: "rgba(248,28,229,0.3)",

      // border color (window, tabs)
      borderColor: "#333",

      // custom CSS to embed in the main window
      css: "",

      // custom CSS to embed in the terminal window
      termCSS: "",

      // if you're using a Linux setup which show native menus, set to false
      // default: `true` on Linux, `true` on Windows, ignored on macOS
      showHamburgerMenu: "",

      // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
      // additionally, set to `'left'` if you want them on the left, like in Ubuntu
      // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
      showWindowControls: "",

      // custom padding (CSS format, i.e.: `top right bottom left`)
      padding: "12px 14px",

      // the full list. if you're going to provide the full color palette,
      // including the 6 x 6 color cubes and the grayscale map, just provide
      // an array here instead of a color map object
      colors: {
        black: "#000000",
        red: "#F33F75",
        green: "#91F894",
        yellow: "#E5F99F",
        blue: "#4E93F4",
        magenta: "#fd90ff",
        cyan: "#8AEFFF",
        white: "#FCFCFC",

        // Light Colors
        lightBlack: "#84858f",
        lightRed: "#F33F75",
        lightGreen: "#91F894",
        lightYellow: "#E5F99F",
        lightBlue: "#D7C5FB",
        lightMagenta: "#fd90ff",
        lightCyan: "#A8D1FF",
        lightWhite: "#FFFBFA",
      },

      // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
      // if left empty, your system's login shell will be used by default
      //
      // Windows
      // - Make sure to use a full path if the binary name doesn't work
      // - Remove `--login` in shellArgs
      //
      // Bash on Windows
      // - Example: `C:\\Windows\\System32\\bash.exe`
      //
      // PowerShell on Windows
      // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
      shell: "C:\\Windows\\System32\\bash.exe",

      // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
      // by default `['--login']` will be used
      shellArgs: ["--login"],

      // for environment variables
      env: {},

      // set to `false` for no bell
      bell: "SOUND",

      // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
      copyOnSelect: false,

      // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
      defaultSSHApp: true,

      // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
      // selection is present (`true` by default on Windows and disables the context menu feature)
      quickEdit: false,

      // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
      // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
      // (inside tmux or vim with mouse mode enabled for example).
      macOptionSelectionMode: "vertical",

      // URL to custom bell
      // bellSoundURL: 'http://example.com/bell.mp3',

      // Whether to use the WebGL renderer. Set it to false to use canvas-based
      // rendering (slower, but supports transparent backgrounds)
      webGLRenderer: false,

      // for advanced config flags please refer to https://hyper.is/#cfg

      // omit or set true to show. set false to remove it
      wickedBorder: false,
      // change the colour here
      wickedBorderColor: "#ffc600",
    },

    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperpower`
    //   `@company/project`
    //   `project#1.0.1`
    plugins: [
      "hyperterm-cobalt2-theme",
      "hyperterm-paste",
      "hyperlinks",
      "hypertitle",
      "hyper-font-ligatures",
      "hyper-cwd-wsl"
    ],

    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: [ ],

    keymaps: {
      "window:devtools": "ctrl+shift+i",
      "window:reload": "ctrl+shift+r",
      "window:reloadFull": "ctrl+shift+f5",
      "window:preferences": "ctrl+,",
      "window:hamburgerMenu": "alt",
      "zoom:reset": "ctrl+0",
      "zoom:in": "ctrl+=",
      "zoom:out": "ctrl+-",
      "window:new": "ctrl+shift+n",
      "window:minimize": "ctrl+shift+m",
      "window:zoom": "ctrl+shift+alt+m",
      "window:toggleFullScreen": "f11",
      "window:close": [
          "ctrl+shift+q",
          "alt+f4"
      ],
      "tab:new": "ctrl+t",
      "tab:next": [
          "ctrl+shift+]",
          "ctrl+shift+right",
          "ctrl+alt+right",
          "alt+right",
          "ctrl+tab"
      ],
      "tab:prev": [
          "ctrl+shift+[",
          "ctrl+shift+left",
          "ctrl+alt+left",
          "alt+left",
          "ctrl+shift+tab"
      ],
      "tab:jump:prefix": "ctrl",
      "pane:next": "ctrl+pageup",
      "pane:prev": "ctrl+pagedown",
      "pane:splitVertical": "ctrl+shift+d",
      "pane:splitHorizontal": "ctrl+shift+e",
      "pane:close": "ctrl+w",
      "editor:undo": "ctrl+shift+z",
      "editor:redo": "ctrl+shift+y",
      "editor:cut": "ctrl+shift+x",
      "editor:copy": "ctrl+shift+c",
      "editor:paste": "ctrl+v",
      "editor:selectAll": "ctrl+shift+a",
      "editor:movePreviousWord": "ctrl+left",
      "editor:moveNextWord": "ctrl+right",
      "editor:moveBeginningLine": "Home",
      "editor:moveEndLine": "End",
      "editor:deletePreviousWord": "ctrl+backspace",
      "editor:deleteNextWord": "ctrl+del",
      "editor:deleteBeginningLine": "ctrl+home",
      "editor:deleteEndLine": "ctrl+end",
      "editor:clearBuffer": "ctrl+shift+k",
      // "editor:break": "ctrl+c",
      "plugins:update": "ctrl+shift+u"
    },
  };
