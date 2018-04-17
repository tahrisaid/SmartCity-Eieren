import socket
import sys
import time
import datetime
import sys

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server_address = ('127.0.0.1', 4545)

sock.connect(server_address)

"""sock.sendall("start")"""

while True:
    veri="deneme"
    veriler = ("%s,%s"%(veri,str(datetime.datetime.now())))
 
    print(veriler)
    
    sock.sendto(veriler.encode(),('127.0.0.1', 4545))

    time.sleep(5)