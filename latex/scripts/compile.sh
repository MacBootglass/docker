export PIC_RESSOURCES_PATH="/root/sources/Qualite/ressources/"
cd /root/sources/epiclearning/Qualite/PQ/
make pq

cd /root/scripts
npm install
gulp watch
