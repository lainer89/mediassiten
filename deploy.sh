#!/bin/bash
# Script de despliegue para MedAssist Landing Page
# Servidor: 159.112.150.185
# Subdominio: medassist.autobee.la (o similar)

set -e

# Variables
SERVER="ubuntu@159.112.150.185"
SSH_KEY="~/Downloads/ssh-key-2025-12-05.key"
REMOTE_PATH="/var/www/medassist"
LOCAL_BUILD="./out"

echo "🚀 Iniciando despliegue de MedAssist Landing..."

# 1. Crear directorio en el servidor si no existe
echo "📁 Preparando directorio en el servidor..."
ssh -i $SSH_KEY $SERVER "sudo mkdir -p $REMOTE_PATH && sudo chown -R ubuntu:ubuntu $REMOTE_PATH"

# 2. Sincronizar archivos
echo "📦 Subiendo archivos al servidor..."
rsync -avz --delete -e "ssh -i $SSH_KEY" $LOCAL_BUILD/ $SERVER:$REMOTE_PATH/

# 3. Ajustar permisos
echo "🔒 Configurando permisos..."
ssh -i $SSH_KEY $SERVER "sudo chown -R www-data:www-data $REMOTE_PATH && sudo chmod -R 755 $REMOTE_PATH"

echo "✅ Archivos desplegados exitosamente!"
echo ""
echo "Próximo paso: Configurar Nginx en el servidor."
echo "Ejecuta: ssh -i $SSH_KEY $SERVER"
echo "Y luego sigue las instrucciones del archivo nginx-config.txt"
