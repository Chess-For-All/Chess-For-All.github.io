import os
import requests

A = requests.get("https://glowing-bassoon-x5v74vxj6xq63pgx4.github.dev/workspaces/Chess-For-All.github.io/A")
AAAA = requests.get("https://glowing-bassoon-x5v74vxj6xq63pgx4.github.dev/workspaces/Chess-For-All.github.io/AAAA")
CATEGORY = requests.get("https://glowing-bassoon-x5v74vxj6xq63pgx4.github.dev/workspaces/Chess-For-All.github.io/CATEGORY")
CNAME = requests.get("https://glowing-bassoon-x5v74vxj6xq63pgx4.github.dev/workspaces/Chess-For-All.github.io/CNAME")
DOCS = requests.get("https://glowing-bassoon-x5v74vxj6xq63pgx4.github.dev/workspaces/Chess-For-All.github.io/docs/")

def _setup_():
    SetupList = [A, AAAA, CATEGORY, CNAME]
    return SetupList

chessforall = os._setup_()
chessforall.domains = DOCS
chessforall.port = 443
