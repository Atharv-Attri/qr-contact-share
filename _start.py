from msedge.selenium_tools import EdgeOptions
from msedge.selenium_tools import Edge


opts = EdgeOptions()
opts.use_chromium = True
opts.add_argument("--log-level=3")

browser = Edge(executable_path=r"C:\Users\atharv\Documents\Python\webdrivers\edgedriver_win64\msedgedriver.exe", options=opts)

browser.set_window_size(405, 900)

browser.get('http://127.0.0.1:3000/')