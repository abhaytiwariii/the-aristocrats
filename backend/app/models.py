from sqlalchemy import Column, Integer, String, Float, Text
from app.database import Base


class Issue(Base):
    __tablename__ = "issues"

    id = Column(Integer, primary_key=True, index=True)

    type = Column(String, nullable=False)
    description = Column(Text)

    location = Column(String)

    image_url = Column(String, nullable=False)

    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)

    status = Column(String, default="pending")