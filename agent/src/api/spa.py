"""Static-file serving rules for the bundled single-page application."""

from __future__ import annotations

from typing import Any

from fastapi.staticfiles import StaticFiles
from starlette.exceptions import HTTPException as StarletteHTTPException


class SPAStaticFiles(StaticFiles):
    """Serve index.html for browser refreshes on client-side routes."""

    async def get_response(self, path: str, scope: dict[str, Any]):
        try:
            response = await super().get_response(path, scope)
            # Add cache headers: immutable cache for hashed assets, no-cache for index.html
            if path.startswith(("assets/", "fonts/")):
                response.headers["Cache-Control"] = "public, max-age=31536000, immutable"
            elif path == "index.html" or path == "":
                response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
            return response
        except StarletteHTTPException as exc:
            if exc.status_code != 404:
                raise
            # Never return index.html for static asset requests (css, js, fonts, images)
            if (
                path.startswith(("assets/", "fonts/", "favicon"))
                or any(path.endswith(ext) for ext in (".js", ".css", ".map", ".woff", ".woff2", ".ttf", ".svg", ".png", ".jpg", ".ico"))
            ):
                raise
            response = await super().get_response("index.html", scope)
            response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
            return response
