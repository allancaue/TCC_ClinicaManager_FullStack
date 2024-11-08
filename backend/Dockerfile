# Use uma imagem base do Python
FROM python:3.11

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos do seu projeto para o diretório de trabalho no container
COPY . /app/

# Instale as dependências do requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Exponha a porta 8000 (a porta padrão do Django)
EXPOSE 8000

# Comando para iniciar o Django quando o container for executado
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
