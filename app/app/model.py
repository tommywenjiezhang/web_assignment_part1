from . import db
from marshmallow import Schema, fields
class City(db.Model):
    __tablename__ = "tblCitiesImport"
    id = db.Column('id',db.Integer, primary_key=True)
    cityName = db.Column("fldName",db.String(50))
    lat = db.Column("fldLat", db.Float)
    lng = db.Column("fldLong",db.Float)
    country = db.Column("fldCountry",db.String)
    abbreviation = db.Column("fldAbbreviation",db.String)
    capital = db.Column("fldCapitalStatus",db.String)
    population = db.Column("fldPopulation",db.BIGINT)

class CitySchema(Schema):
    id = fields.Integer()
    cityName = fields.String()
    lat = fields.Float()
    lng = fields.Float()
    country = fields.String()
    abbreviation = fields.String()
    capital = fields.String()
    population = fields.Integer()