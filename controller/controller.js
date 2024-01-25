const express=require('express')
const router=express.Router();
const Stock=require('../models/stock-model');
const top10= async (req, res) => {
    try {
      const topStocks = await Stock.find().sort({ /* your sorting criteria */ }).limit(10);
      res.json(topStocks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Route for finding stocks by name
 const byname= async (req, res) => {
    try {
      const stocks = await Stock.find({ name: req.params.name });
      res.json(stocks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Route for fetching price history of a particular stock
 const pricehistory= async (req, res) => {
    try {
      const stock = await Stock.findById(req.params.stockId);
      if (!stock) {
        return res.status(404).json({ message: 'Stock not found' });
      }
      // Fetch price history from stock object and send it in the response
      res.json(stock.priceHistory);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Route for adding a stock to favorites
  const addstock= async (req, res) => {
      const {stockId,name,open,high,low,close,isFavorite}=req.body;
    const newStock = new Stock;
    newStock.stockId=stockId;
    newStock.name=name;
    newStock.open=open;
    newStock.high=high;
    newStock.low=low;
    newStock.close=close;
    newStock.isFavorite=isFavorite;
  
    try {
      const savedStock = await newStock.save();
      res.status(201).json(savedStock);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Route for viewing favorite stocks
  const favstock= async (req, res) => {
    try {
      const favoriteStocks = await Stock.find({ isFavorite: true });
      res.json(favoriteStocks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Route for removing a stock from favorites
 const deletestock= async (req, res) => {
    try {
      const removedStock = await Stock.findByIdAndRemove(req.params.stockId);
      res.json(removedStock);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports ={top10,byname,pricehistory,addstock,favstock,deletestock};