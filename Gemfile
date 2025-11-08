# Gemfile for Jekyll Blog
# Compatible with Ruby 3.3+ and Jekyll 4.4+

source 'https://rubygems.org'

# Core Jekyll
gem 'jekyll', '~> 4.4'

# Required for Ruby 3.0+ (webrick removed from stdlib)
# Reference: https://github.com/jekyll/jekyll/issues/8523
gem 'webrick', '~> 1.8'

# Forward compatibility with Ruby 3.4+
# These gems removed from Ruby 3.4 stdlib
# Reference: https://batsov.com/articles/2025/01/12/running-jekyll-on-ruby-3-4/
gem 'csv', '~> 3.3'
gem 'base64', '~> 0.2'

# Jekyll plugins (from _config.yml)
gem 'jekyll-paginate', '~> 1.1'
gem 'jekyll-sitemap', '~> 1.4'

# Markdown processing
gem 'kramdown', '~> 2.3'
gem 'kramdown-parser-gfm', '~> 1.1'

# Development dependencies
group :development do
  # Live reload during development (EventMachine for Jekyll 4.x)
  gem 'eventmachine', '~> 1.2'

  # Bundler itself
  gem 'bundler', '~> 2.5'

  # Code linting (optional)
  # gem 'rubocop', '~> 1.50'
end

# Platform-specific gems (update deprecated :mingw syntax)
platforms :windows do
  gem 'tzinfo', '~> 2.0'
  gem 'tzinfo-data'
  gem 'wdm', '~> 0.1'
end
