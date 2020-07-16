from  flask_restful import Resource
from app.model import City, CitySchema
from flask import Response
import json


class CityRoute(Resource):
    def get(self,id):
        city = City.query.filter_by(id=id).first()
        schema = CitySchema()
        cityJson = json.dumps(schema.dump(city))
        return Response(response=cityJson,status=200,mimetype="application/json")
    def delete(self,id):

