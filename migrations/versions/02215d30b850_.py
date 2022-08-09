"""empty message

Revision ID: 02215d30b850
Revises: fc24969f4e87
Create Date: 2022-08-04 17:41:47.254915

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '02215d30b850'
down_revision = 'fc24969f4e87'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('recipes', sa.Column('cookingtime', sa.String(length=250), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('recipes', 'cookingtime')
    # ### end Alembic commands ###
