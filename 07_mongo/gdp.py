import pymongo

SERVER_ADDR="157.230.12.32"
connection=pymongo.MongoClient(SERVER_ADDR)
db = connection.specialboard
collection = db.gdp

def find_gdp(year):
    '''returns gdp of a given year'''
    return collection.find( {"date": year } )

# Wow, you could use javascript in the query
def find_year_gt(gdp):
    '''returns all years where gdp is greater than the one provided'''
    return collection.find("this.value > 18624475000000")