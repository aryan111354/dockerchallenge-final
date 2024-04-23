# Use the Nginx image
FROM nginx:alpine

# Remove the default nginx index page
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom configuration
COPY nginx.conf /etc/nginx/conf.d

# Copy the content of the public folder to the web root
COPY public /usr/share/nginx/html