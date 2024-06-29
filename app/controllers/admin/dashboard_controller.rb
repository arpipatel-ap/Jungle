class Admin::DashboardController < ApplicationController
  http_basic_authenticate_with name: ENV['ADMIN_USERNAME'], password: ENV['ADMIN_PASSWORD']
  def show
    Rails.logger.debug "Admin Username: #{ENV['ADMIN_USERNAME']}"
    Rails.logger.debug "Admin Password: #{ENV['ADMIN_PASSWORD']}"
    @products = Product.count
    @categories = Category.count
  end
end
