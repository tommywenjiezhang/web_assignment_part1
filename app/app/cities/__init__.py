from flask import Blueprint, Response
import json
from app.model import City, CitySchema
cities_bp = Blueprint('cities_bp',__name__,template_folder='templates')

@cities_bp.route('/',methods=['GET'])
def index():
    cities = City.query.all()
    schema = CitySchema()
    jsonRes = json.dumps([schema.dump(city) for city in cities])
    return Response(response=jsonRes, status=200,mimetype="application/json")
