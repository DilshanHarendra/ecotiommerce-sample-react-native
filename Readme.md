###Add source for android

source $HOME/.bash_profile

###Build Android

####Step 1
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

####Step 2
cd android

####Step 3
./gradlew assembleDebug


###Clean Build Cache Android
./gradlew cleanBuildCache
