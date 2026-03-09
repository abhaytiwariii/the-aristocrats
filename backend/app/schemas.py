from pydantic import BaseModel


class IssueCreate(BaseModel):
    type: str
    description: str | None = None
    location: str | None = None
    latitude: float
    longitude: float