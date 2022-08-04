"""empty message

Revision ID: fc24969f4e87
Revises: e7b2b92caad7
Create Date: 2022-08-03 17:23:52.591639

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fc24969f4e87'
down_revision = 'e7b2b92caad7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('categories', sa.Column('name', sa.String(length=250), nullable=False))
    op.drop_constraint('categories_nombre_key', 'categories', type_='unique')
    op.create_unique_constraint(None, 'categories', ['name'])
    op.drop_column('categories', 'nombre')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('categories', sa.Column('nombre', sa.VARCHAR(length=250), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'categories', type_='unique')
    op.create_unique_constraint('categories_nombre_key', 'categories', ['nombre'])
    op.drop_column('categories', 'name')
    # ### end Alembic commands ###
