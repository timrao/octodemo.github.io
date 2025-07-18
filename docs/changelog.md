# Changelog

## v1.8.6 (2025-06-02)

### iOS v1.8.6

- Added support for displaying Quick Input Alias

### Android v1.8.6

- Added support for Quick Input
- Added support for Quick Input Alias
- Fixed a crash issue caused by cloud sync
- Added Quick Action support for copying more content

### Windows & macOS v1.8.6

- Fixed an issue where Quick Input Alias could not be updated in real-time

## v1.8.5 (2025-05-30)

### General (v1.8.5)

- Fixed an issue where cloud sync might fail to import data
- Fixed a bug that could cause clip data loss during cloud sync
- Improved cloud sync stability and speed

### Windows & macOS (v1.8.5)

- Added support for Quick Input Alias
- Added support for sync notifications
- Added support for custom window size in Quick Input
- Fixed an issue where the Quick Input window couldn’t be moved
- Fixed an issue where favorites might not show
- Fixed an issue where cloud sync might require frequent re-authorization

## v1.8.3 (2025-04-30)

### General v1.8.3

- Fixed device binding failure issue
  
### iOS v1.8.3

- Fixed some known issues

### Android v1.8.3

- Added support for "Accessibility" authorization
- Added support for "Power Saving Optimization" configuration
- Fixed frequent authorization requests for Cloud Sync

### Windows & macOS v1.8.3

- Fixed incorrect display issue in device list
- Fixed Quick Input not displaying issue
- Fixed Quick Input not inputting issue

## v1.8.2 (2025-04-22)

### General v1.8.2

- Added Cloud Sync encryption
- Added Collections Cloud Sync support
- Added multi-language support
- Enabled concurrent Nearby and Cloud syncing
- Improved Clip history loading speed
- Fixed excessive Cloud Sync triggering
- Fixed crashes when opening email URLs
- Fixed file transfer failures

### iOS v1.8.2

- Fixed some known issues
  
### Android v1.8.2

- Added configurable auto-hide for Quick Action
- Added source info display for Quick Action
- Enhanced Quick Action stability and experience
- Improved Clipboard Background Monitoring stability

### Windows & macOS v1.8.2

- Added Quick Input window position configuration
- Removed redundant Quick Input auto-hide settings
- Fixed Windows Tab key group switching
- Fixed Windows Collections visibility issue
- Fixed Windows Quick Input display problem
- Fixed macOS Quick Input functionality
- Fixed input issues after switching groups
- Fixed cloud sync causing clipboard data loss

## v1.8.0 (2025-04-04)

### General v1.8.0

- Optimized Nearby & Cloud Sync to improve stability and speed
- Improved performance of internal processing of Clips

### iOS v1.8.0

- Fixed possible failure of "Nearby Sync"

### Android v1.8.0

- Added support for "Quick Action"
- Added support for system sharing using "Quick Copy"
- Added restart of "Nearby Sync" service after pairing devices
- Fixed issue where "Background Monitoring" could affect the input method
- Fixed issue where plain text and HTML could be inserted multiple times
- Optimized package size
- Optimized the stability of "Quick Copy"

### Windows & macOS v1.8.0

- Added support for floating "Quick Input" window
- Added support for switching "Quick Input" to Collections
- Fixed possible crash issue with "WebDAV"
- Fixed possible disappearance issue of "Collections"

## v1.7.4 (2025-03-24)

- Fixed the issue where real-time Cloud Sync could not maintain a long-term connection

## v1.7.3 (2025-03-17)

### General v1.7.3

- Fixed WebDAV real-time Cloud Sync failure issue
- Fixed WebDAV Cloud Sync initialization failure issue
- Fixed high CPU usage issue
- Fixed high power consumption issue
- Fixed frequent refresh of Clip history

### Android v1.7.3

- Added Nearby Sync availability detection
- Improved stability of Clipboard background monitoring
- Improved stability of screenshot monitoring
- Improved log display and output

### Windows & macOS v1.7.3

- Improved Settings page display performance
- Improved stability of Clipboard background monitoring

## v1.7.2 (2025-03-10)

### General v1.7.2

- Added support for Dark Mode
- Improved device online status display
- Enhanced performance and stability of underlying dependencies
- Improved user experience when deleting clips
- Fixed WebDAV sync failure issue
- Fixed real-time Cloud Sync via WebDAV issue
- Fixed high CPU usage issue
- Fixed high power consumption issue
- Fixed sync failure issues caused by network switching
- Fixed issue where local data cleanup

### iOS v1.7.2

- Added automatic service restart after network switching
- Fixed system file sharing failure issue
- Fixed crash issues during sync operations

### Android v1.7.2

- Added support for authorization via Root
- Added auto service restart after network switching
- Fixed issue where pull-to-refresh
- Fixed Cloud Sync toggle not taking effect

### Windows & macOS v1.7.2

- Added adaptive single-column layout for homepage
- Added support for delete keyboard shortcuts
- Add support for silent startup
- Fixed issue where macOS failed to read large images from clipboard
- Fixed issue where macOS couldn't open and preview files
- Fixed issue where Windows couldn't copy files to clipboard
- Fixed issue where Windows couldn't open files
- Fixed configuration issues for double/triple-click operations

## v1.7.1 (2025-02-26)

### General v1.7.1

- Fixed WebDAV Cloud Sync failure issue
- Fixed real-time Cloud Sync across devices via WebDAV issue
- Fixed incorrect Cloud Sync timestamp display

## v1.7.0 (2025-02-17)

### General v1.7.0

- Added WebDAV for Cloud Sync
- Added real-time Cloud Sync across devices
- Added Clip Collections
- Added timestamp for Clips
- Fixed URL plain text copy issue
- Fixed Cloud Sync full sync failure
- Optimized Nearby Sync pairing to numbers only

### iOS v1.7.0

- Improved Clip history list loading
- Fixed manual cleanup issues

### Android v1.7.0

- Improved Clip history list loading
- Fixed background Clip list operation issue
- Fixed Traditional Chinese display issue

### Windows & macOS v1.7.0

- New main interface design
- Added Quick Input "Copy..." operation
- Added global hotkeys for copy, paste and select all
- Fixed Cloud Sync authorization refresh issue
- Fixed Clip items display offset issue
- Fixed Quick Input window flicker
- Fixed global hotkey registration
- Improved Clip homepage experience and pagination

## v1.6.2 (2025-01-01)

### General v1.6.2

- Added support for "local history cleanup" based on time and quantity
- Added support for manual "Clip history cleanup"
- Added default icon for Clip items from unknown sources

### iOS v1.6.2

- Fixed issue of sync failure after copying content in album
- Fixed issue of duplicate file extensions when exporting from clipboard
- Added support for SVG preview

### Android v1.6.2

- Optimized the authorization process for Background Monitoring
- Fixed issue of the first time enabling "screenshot" monitoring not taking effect
- Fixed issue of being unable to select multiple items in the Clip list after running in the background for a period of time

### Windows & macOS v1.6.2

- Fixed issue of search input box offset being blocked
- Fixed issue of search input box unable to input in certain cases
- Fixed problem of incorrect display of some localized content
- Optimized prompts and displays for macOS authorization process
- Optimized the display of Quick Input window

## v1.6.0 (2024-12-06)

### General v1.6.0

- Added support for "Search"
- Added support for pairing via "Static IP"
- Added display of "Paired Device IP"
- Added Clip filtering for "Confidential" and "Temporary" content
- Added support for "Cloud Deletion"
- Improved stability and speed of Cloud Sync
- Renamed "Devices" to "Nearby Sync"

### iOS v1.6.0

- Added support for "Haptic Feedback" configuration
- Improved Clip content reading
- Fixed incorrect display in "Cloud Sync Details"
- Fixed background "Quick Copy" failure issues

### Android v1.6.0

- Added support for "Task List Visibility" configuration
- Added support for "Haptic Feedback" configuration
- Added support for "Screenshot" source
- Fixed "OneDrive" background sync failure issues
- Fixed "BMP" image preview issues
- Fixed Clip data clearing issues
- Fixed incorrect time display in "Sync Details"
- Fixed various crash issues
- Fixed progress stopping during Cloud Sync
- Fixed "Copy as Plain Text" configuration not taking effect
- Fixed Background Monitoring startup issues in certain scenarios
- Improved "TIFF" image preview performance
- Improved source permission prompts and configuration
- Improved Foreground Service and Background Monitoring configuration

### Windows & macOS v1.6.0

- Added support for Quick Input
- Added support for "Double-click/Triple-click" Clip actions
- Improved underlying dependency performance and stability
- Fixed macOS "Device Discovery Service" permission exception issues
- Fixed macOS "Devices" page crash issues
- Improved Windows display and adaptation across different resolutions
- Fixed Windows content and font blur issues in certain scenarios
- Fixed blank page issues after logging into Cloud Sync

## v1.5.2 (2024-11-04)

### General v1.5.2

- Added support for full Cloud Sync
- Optimized the stability and speed of Cloud Sync
- Optimized and simplified log output and display
- Fixed issue where Cloud Sync may fail in certain situations
- Fixed issue of duplicate content when using Quick Copy
- Fixed issue of inserting content that does "Unsupported for preview"

### iOS v1.5.2

- Fixed issue of device discovery service not working
- Fixed permission request issue for device binding

### Android v1.5.2

- Fixed issue of possible failure to exit Cloud Sync
- Optimized the independent config of Foreground Service and Background Monitoring

### Windows & macOS v1.5.2

- Optimized the performance and stability of underlying dependencies
- Fixed issue of failing to obtain ignored apps on macOS
- Fixed Windows display issues and unresponsive problems

## v1.5.0 (2024-10-17)

### General v1.5.0

- Added support for Cloud Sync feature
- Added support for maximum transfer configuration in Quick Copy
- Optimized the speed and stability of Nearby Sync
- Fixed issue of garbled text display in Clip History for plain text
- Fixed serialization failure issue caused by non-existent files

### iOS v1.5.0

- Fixed issue where shortcuts might not trigger
- Improved the display of sync status and progress

### Android v1.5.0

- Fixed issue where Background Monitoring might not close or restart properly
- Fixed crash issue of the Foreground Service in Background Monitoring
- Fixed device parsing crash issue in "Device Discovery"

### Windows & macOS v1.5.0

- Added "Bonjour" service status check in the device page
- Updated the underlying dependency Tauri to v2
- Optimized the operation logic of menu bar/tray icon
- Optimized the entry point for migrating configuration shortcuts
- Added embedded bootstrap program for Windows runtime
- Fixed issue of inability to auto-start on Windows boot
- Fixed issue of copying Bitmap images on Windows
- Fixed crash issue when adding ignored applications on macOS
- Fixed file path access failure issue on macOS

## v1.4.0 (2024-07-08)

### General v1.4.0

- Added the "Copy..." option to extract and copy text like SMS codes and links
- Added "Enable IPv6" and "Copy as Plain Text" options
- Fixed inaccurate online status in the device list
- Fixed device list loading failures
- Fixed sync failures with nearby devices
- Fixed Clip content loading issues
- Fixed log time zone mismatches
- Fixed issues with retransmitting Clip content
- Improved Clip history loading speed
- Improved connection speed and stability between devices

### iOS v1.4.0

- Added support for Quick Copy Images
- Fixed instability issues with Quick Copy
- Fixed device list retrieval issues after triggering shortcuts

### Android v1.4.0

- Added Background Monitoring to automatically copy to nearby devices
- Added support for Quick Copy Images
- Improved retrieval of app information triggering Quick Copy

### Windows & macOS v1.4.0

- Added Quick Copy transfer progress display
- Added "Copy Sound" to play sounds on copy and sync success
- Added "Hotkey" configuration to quickly show and hide windows
- Added batch selection of Clip history via "Hotkeys"
- Fixed issues copying files to clipboard after transfer on Windows
- Fixed issues opening files after transfer on Windows
- Fixed incorrect default icons for source applications
- Fixed display issues for some internationalized content

## v1.3.0 (2024-06-01)

### General

- Added bulk select/delete for Clip history
- Added online/offline status for bound devices
- Improved sync speed for small Clips (text and images)
- Improved device query speed & simplified connection; reduced sync delay
- Fixed Quick Copy issues due to data format
- Fixed re-pairing issues after initial fail/success

### iOS

- Added "SMS" as a Clip source; use "Shortcuts" to auto-copy SMS content to nearby devices
- Added support for "Shortcuts or Share Sheet" to copy content to nearby devices

### Android

- Added "SMS" as a Clip source; auto-copy SMS content to nearby devices upon permission
- Added Quick Copy menu to copy content without launching app
- Added "System Share" option to copy content via system share
- Added image format previews (SVG, TIFF)

### Windows & macOS

- Added support to filter Clip sources by app, selectively monitor Clip content
- Fixed occasional crashes on Windows when receiving Clips
- Fixed issues opening/displaying synced files on Windows
- Fixed occasional crashes on Windows when using context menu
- Fixed clipboard read/write order issues on macOS
- Fixed occasional blank entries in Clip history

## v1.2.1 (2024-05-03)

- Fixed issue of Nearby Sync failure
- Optimized sync speed of nearby devices

## v1.2.0 (2024-04-30)

- Added sync progress and status for nearby devices
- Added app logs export
- Optimized device pairing experience and process
- Optimized the process and experience of synchronizing nearby devices
- Fixed issue of displaying HTML by default when copying content from a webpage
- Fixed problem of failed sync with nearby devices

## v1.1.0 (2024-04-23)

- Added support for Nearby Sync

## v1.0.0 (2024-03-13)

Octoclip, Your ultimate Clips manager, Sync and manage your Clips across platforms.

First release.
