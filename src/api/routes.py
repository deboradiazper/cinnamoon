"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Recipes, Ingredients, Trivia, Categories, RecipesFavorites, IngredientsFavorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


#Login
@api.route('/login', methods=['POST'])
def login():
    data = request.json
    print(data)

    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if not user:
        return jsonify({"message": "incorrect email or password"}), 400
    access_token = create_access_token(identity=user.id)

    return jsonify({"token": access_token}), 200

 
@api.route('user/<int:id>', methods=['GET'])
@jwt_required()
def get_user(id):
    user = User.query.get(id)
    return jsonify(user.serialize())


#User and userRegistration
@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()
    data = [user.serialize() for user in users]
    
    return jsonify(data), 200

@api.route('/user', methods=['POST'])
def create_user():
    data = request.json
    user = User(name=data.get('name'), last_name=data.get('lastName'), email=data.get('email'), password=data.get('password'))
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "everything ok"}), 200


#RecipesFavorites
@api.route('/recipesfavorites', methods=['GET'])
@jwt_required()
def get_recipes_Favorites():
    user_id = get_jwt_identity()
    favorites = RecipesFavorites.query.filter_by(user_id = user_id)
    recipes = Recipes.query.all()
    data = [recipe.serialize() for recipe in recipes]
    for recipe in data: 
        for favorite in favorites: 
            if recipe["id"] == favorite.recipe_id: 
                recipe["favorite"] = True
    
    return jsonify(data), 200


#Recipes
@api.route('/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipes.query.all()
    data = [recipe.serialize() for recipe in recipes]
    
    return jsonify(data), 200

@api.route('/recipes', methods=['POST'])
def create_recipes():
    data = request.json
    recipe = Recipes(name=data.get('name'), description=data.get('description'), image=data.get('image'), cookingtime=data.get('cooking_time'))
    db.session.add(recipe)
    db.session.commit()
    return jsonify({"message": "everything ok"}), 200

#IngredientsFavorites
@api.route('/ingredientsfavorites', methods=['GET'])
@jwt_required()
def get_ingredients_Favorites():
    user_id = get_jwt_identity()
    favorites = IngredientsFavorites.query.filter_by(user_id = user_id)
    ingredients = Ingredients.query.all()
    data = [ingredient.serialize() for ingredient in ingredients]
    for ingredient in data: 
        for favorite in favorites: 
            if ingredient["id"] == favorite.ingredient_id: 
                ingredient["favorite"] = True
    
    return jsonify(data), 200



#Ingredients
@api.route('/ingredients', methods=['GET'])
def get_ingredients():
    ingredients = Ingredients.query.all()
    data = [ingredient.serialize() for ingredient in ingredients]
    
    return jsonify(data), 200

@api.route('/ingredients', methods=['POST'])
def create_ingredients():
    data = request.json
    ingredient = Ingredients(name=data.get('name'), image=data.get('image'))
    db.session.add(ingredient)
    db.session.commit()
    return jsonify({"message": "everything ok"}), 200


#Trivia
@api.route('/trivia', methods=['GET'])
def get_trivia():
    trivia = Trivia.query.all()
    data = [trivia.serialize() for trivia in trivia]
    
    return jsonify(data), 200

@api.route('/trivia', methods=['POST'])
def create_trivia():
    data = request.json
    trivia = Trivia(id=data.get('id'), text=data.get('text'), image=data.get('image'))
    db.session.add(trivia)
    db.session.commit()
    return jsonify({"message": "everything ok"}), 200


#Categories
@api.route('/categories', methods=['GET'])
def get_categories():
    categories = Categories.query.all()
    data = [categories.serialize() for categories in categories]
    
    return jsonify(data), 200

@api.route('/categories', methods=['POST'])
def create_categories():
    data = request.json
    categories = Categories(id=data.get('id'), name=data.get('name'))
    db.session.add(categories)
    db.session.commit()
    return jsonify({"message": "everything ok"}), 200