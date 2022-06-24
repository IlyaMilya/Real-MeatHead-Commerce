class SessionsController < ApplicationController
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: 200
      else 
    render json: {error: "Invalid email or password" }, status:401 
      end
    end

    def destroy
        session.delete(:user_id)
        head :no_content
      end

      def show 
    user = User.find_by(id: session[:user_id])
    render user, status: 200
      end

  end