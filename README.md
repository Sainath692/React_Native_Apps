-React native projects
Installation Of react native in IOS and Windows using official documentation
For Windows

  -Follows the steps https://reactnative.dev/docs/environment-setup?platform=android&os=windows
  -Download and Install Node JS  - https://nodejs.org/en
  -Download and Install Compatible JDK version suggested by doc using command with choco -  choco install -y nodejs-lts microsoft-openjdk17
  -Download and Install Android Studio  - https://developer.android.com/studio
  Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 14 (UpsideDownCake) entry, then make sure the following items are checked:

    Android SDK Platform 34
    Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
    Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 34.0.0 is selected.
    Configure the ANDROID_HOME environment variable
    The React Native tools require some environment variables to be set up in order to build apps with native code.
    
    Open the Windows Control Panel.
    Click on User Accounts, then click User Accounts again
    Click on Change my environment variables
    Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:
    
    

- create new react native app using following command
    -npx react-native@latest init AwesomeProject

  
