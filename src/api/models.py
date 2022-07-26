from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellidos = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(80), unique=False, nullable=False)
    favoritos = db.relationship('Favoritos', backref = 'User')
    favoritos_ingredientes = db.relationship('Ingredientes_favoritos', backref = 'User')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellidos": self.apellidos,
            "email": self.email,
            # do not serialize the password, its a security breach
        }



class Favoritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.integer(150), db.ForeignKey('User.id'))
    receta_id = db.Column(db.integer(150), db.ForeignKey('recetas.id'))

    def __repr__(self):
        return f'<Favoritos %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.usuario_id,
            "receta_id" : self.receta_id,
        }



class Recetas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    descripcion = db.Column(db.String(500), nullable=False)
    favoritas = db.relationship('Favoritos', backref = 'Recetas')
    ingredientes = db.relationship('Recetas_ingredientes', backref = 'Recetas')
    categorias = db.relationship('Categorias', backref = 'Recetas')

    def __repr__(self):
        return f'<Recetas %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
        }


class Ingredientes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    favoritos = db.relationship('Ingredientes_favoritos', backref = 'Ingredientes')
    recetas = db.relationship('Recetas_ingredientes', backref = 'Ingredientes')
    curiosidades = db.relationship('Curiosidades', backref = 'Ingredientes')

    def __repr__(self):
        return f'<Ingredientes %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
        }


class Ingredientes_favoritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ingrediente_id = db.Integer(150), db.ForeignKey('ingredientes.id')
    usuario_id = db.Column(db.integer(150), db.ForeignKey('usuario.id'))

    def __repr__(self):
        return f'<Ingredientes_favoritos %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "ingrediente_id": self.ingrediente_id,
            "user": self.user_id,
        }



class Recetas_ingredientes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    receta_id = db.Column(db.integer(150), db.ForeignKey('recetas.id'))
    ingrediente_id = db.Column(db.integer(150), db.ForeignKey('ingredientes.id'))

    def __repr__(self):
        return f'<Recetas_ingredientes %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "receta_id": self.receta_id,
            "ingrediente_id": self.ingrediente_id,
        }



class Curiosidades(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    texto = db.Column(db.String(500), nullable=False)
    ingrediente_id = db.Column(db.integer(150), db.ForeignKey('ingredientes.id'))

    def __repr__(self):
        return f'<Curiosidades %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "texto": self.texto,
            "ingrediente_id": self.ingrediente_id,
        }



class Categorias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), unique=True, nullable=False)
    receta_id = db.Column(db.integer(150), db.ForeignKey('recetas.id'))

    def __repr__(self):
        return f'<Categorias %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "receta_id": self.receta_id,
        }
