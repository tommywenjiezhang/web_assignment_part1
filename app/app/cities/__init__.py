from flask import Blueprint, jsonify
import json
from app.model import City, CitySchema
cities_bp = Blueprint('cities_bp',__name__,template_folder='templates')

@cities_bp.route('/',methods=['GET'])
def index():
    cities = City.query.all()
    schema = CitySchema()
    return json.dumps([schema.dump(city) for city in cities])
