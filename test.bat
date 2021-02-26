@echo off
set /p usr_input_str_ymd="input(YYYYMMDD): "
set /p usr_input_str_hm="input(HHMM): "
set ps_input_date=%usr_input_str_ymd:~0,4%-%usr_input_str_ymd:~4,2%-%usr_input_str_ymd:~6,2% %usr_input_str_hm:~0,2%:%usr_input_str_hm:~2,2%

pause

echo %ps_input_date%
set ps_command=`powershell "([Datetime]'%ps_input_date%').AddDays(-7).ToString('yyyy-MM-dd HH:mm')"`
FOR /F "usebackq delims=" %%A IN (%ps_command%) Do set before7days=%%A
echo %before7days%

set ps_command=`powershell "([Datetime]'%ps_input_date%').AddHours(-12).ToString('yyyy-MM-dd HH:mm')"`
FOR /F "usebackq delims=" %%A IN (%ps_command%) Do set before12h=%%A
echo %before12h%

set ps_command=`powershell "([Datetime]'%ps_input_date%').AddMinutes(30).ToString('yyyy-MM-dd HH:mm')"`
FOR /F "usebackq delims=" %%A IN (%ps_command%) Do set after30mins=%%A
echo %after30mins%

pause