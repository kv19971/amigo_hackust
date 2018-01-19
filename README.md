# Amigo for hackust!
Requirements: 
npm and nodejs 

Steps to install and run: 

npm install -g babel babel-cli

npm install babel-core babel-loader babel-preset-react babel-preset-es2015

npm install 

npm start



## Text Summarization

processData.py takes as input the dataset from [here](http://research.signalmedia.co/newsir16/signal-dataset.html "The Signal Media One-Million News Articles Dataset") and returns a tuple of the form (heads,descs,None). Where heads is a list of 50,001 article titles and descs are the articles.

The vocabulary-embedding notebook takes the processed data and an initial embedding matrix is built from GloVe, a pre-trained model from Stanford.
