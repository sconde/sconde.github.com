# Jekyll Development Container
# Base: Official Alpine Ruby image
# Reference: https://hub.docker.com/_/ruby

FROM ruby:3.3-alpine

# Environment configuration
ENV GEM_HOME=/usr/local/vendor
ENV PATH=${GEM_HOME}/bin:${PATH}
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

# Install system dependencies for Jekyll
# bash: Required by devcontainer features
# build-base: gcc, g++, make, libc-dev (compilation toolchain)
# libstdc++: C++ standard library (required by some gems)
# git, git-lfs: version control
# curl: network utilities
RUN apk add --no-cache \
    bash \
    build-base \
    libstdc++ \
    git \
    git-lfs \
    curl

# Update RubyGems and install Jekyll + Bundler
# --system flag updates RubyGems itself
# gem cleanup removes old versions and reduces attack surface
RUN yes | gem update --system && \
    gem cleanup && \
    yes | gem install jekyll bundler && \
    gem cleanup

# Create non-root user for development
# Standard convention: UID 1000 for primary user
RUN addgroup -g 1000 devuser && \
    adduser -D -u 1000 -G devuser devuser

# Configure permissions for non-root user
RUN chown -R devuser:devuser /usr/local/vendor

# Working directory
WORKDIR /workspace

# Note: USER directive removed - configured via devcontainer.json remoteUser
# This prevents permission conflicts with devcontainer feature injection
# Security: Non-root execution enforced by devcontainer.json

# Default command: start interactive shell
CMD ["/bin/sh"]
