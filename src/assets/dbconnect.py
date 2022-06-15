import pyodbc
#import mysql.connector

# Trusted Connection to Named Instance
server = 'localhost' 
database = 'carddb' 
username = 'angular' 
password = 'angular' 
cnxn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+';DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = cnxn.cursor()
cursor.execute("SELECT username, useremail from [dbo].[userdetails]")

for val in cursor:
    print(val)