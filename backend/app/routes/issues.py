from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session
from app.database import get_db
from app import models

router = APIRouter()


@router.post("/issues")
def create_issue(
    type: str = Form(...),
    description: str = Form(None),
    location: str = Form(None),
    latitude: float = Form(...),
    longitude: float = Form(...),
    image: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    # TEMP image URL (until we add Cloudinary)
    image_url = f"uploads/{image.filename}"

    new_issue = models.Issue(
        type=type,
        description=description,
        location=location,
        latitude=latitude,
        longitude=longitude,
        image_url=image_url,
        status="pending"
    )

    db.add(new_issue)
    db.commit()
    db.refresh(new_issue)

    return new_issue