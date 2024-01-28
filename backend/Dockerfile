# Use the official PHP 8.2 image as a base
FROM php:8.2-fpm

COPY composer.lock composer.json /var/www/

WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql pgsql
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www-data:www-data . /var/www

COPY ./start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

COPY .env /.env
RUN sed -i 's/\r$//g' /.env
RUN chmod +x /.env

# Change current user to www
USER www-data

# Expose port 8000 and start php-fpm server
EXPOSE 8000
CMD ["php-fpm"]
