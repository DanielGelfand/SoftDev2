import pymongo

SERVER_ADDR="157.230.12.32"
connection=pymongo.MongoClient(SERVER_ADDR)
db = connection.specialboard
collection = db.population

def get_population_age(age):
    '''returns population data for a given age'''
    return collection.find( {"age": age })[0]

def get_population_year(year):
    '''returns population data for a given year'''
    return collection.find( {"year": year })[0]

#print( get_population_age(60) )

def get_year(totalPop):
    '''returns year(s) when total population equals the one provided'''
    lout = []

    for doc in collection.find( {"total": totalPop} ):
        lout.append(doc)
    return lout

#print( get_year(4430000) )

def get_years_females_gte(numFemales):
    '''returns years when female population was greater than or equal to num provided'''
    lout = []

    for doc in collection.find({"females": {"$gte": numFemales}}):
        lout.append(doc)
    return lout

#print( get_years_females_gte( 2300000 ) )

def get_years_females_lte(numFemales):
    '''returns years when female population was less than or equal to num provided'''
    lout = []

    for doc in collection.find({"females": {"$lte": numFemales}}):
        lout.append(doc)
    return lout

#print( get_years_females_lte( 100000 ) )
