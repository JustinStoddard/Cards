class Api::CardsController < ApplicationController
  before_action :set_card, only: [:show, :update, :destroy]

  def index
    render json: Card.all.order(created_at: :desc)
  end

  def show
    render json: @card
  end

  def create
    card = Card.create(card.params)
      if card.save
        render json: card
      else
        render json: { errors: card.errors.full.messages.join(',') }, status: 422
      end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: { errors: @card.errors.full.messages.join(',') }, status: 422
  end

  def destroy
    @card.destroy
  end

  private
    def set_card
      @card = Card.find(params[:id])
    end

    def card_params
      params.require(:card).permit(:name, :description)
    end
  
end
