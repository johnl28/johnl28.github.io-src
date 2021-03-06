--------------------

[Text]
QManager is a C++ and JavaScript application for Windows Desktop personalisation. 
It uses Chromium Embedded Framework for UI rendering and Windows API for detecting user's interaction with the Desktop.

[/Text]

[/]

# Links
[url] GitHub Repository, asf
[url] Download Page, asf

# Features
[Text]
<b>&bull; Auto-Hide Desktop Icons</b>

The Desktop Manager Thread will:
  - Check if the focused window is "WorkerW".
  - Check if the pressed key matches with the one chosen by the user.
  
If the above cases are <b>True</b> at the same time, the time will be reseted and the <b>Main Process</b> will send a packet to the <b>Render Process</b> to update the UI bar.
When the time is up without detecting the key press on "WorkerW" window, "SysListView32" will be hidden.
[/Text]
[/]
[img] auto, 100%, /data/qmanager/2Pe35vj.png
[img] auto, 100%, /data/qmanager/ueOtL9w.png

------
## Test Video
[yt] https://www.youtube.com/embed/eboelBRS_SI