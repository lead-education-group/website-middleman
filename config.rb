# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

set :relative_links, true

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Ensure _headers and _redirects files are included so that Netlify puts these http headers on our website in production.
# And handles http-https redirects by not showing redirection link in response.
after_build do |builder|
  # Copy _headers and _redirects file to build directory
  FileUtils.cp('source/_headers', 'build/_headers')
  FileUtils.cp('source/_redirects', 'build/_redirects')
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def markdown(text)
    if text.nil?
      ''
    else
      Tilt['markdown'].new(context: @app) { text }.render
    end
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end
