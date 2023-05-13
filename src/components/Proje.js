import React from "react";
import "./TextSummarizer.css";

const Proje = () => {
  return (
    <div className="TextSummarizer">
      <div className="Card">
        <h2>Text Summarizer</h2>
        <p>
        A text summarizer is an online tool that wraps up a text to a
          specified short length. It condenses a long article to main points.
          The need for text summarizers is increasing day by day, because of
          time constraints. People are looking for shortcut methods to learn
          ideas in lesser time. Even text summarizers are helping them to decide
          whether a book, a research paper, or an article is worth reading or
          not. Oxford defines summary as: “a short statement that gives only the
          main points of something, not the details.”
        </p>

        <p> Text summarization refers to the technique of shortening long pieces
          of text. The intention is to create a coherent and fluent summary
          having only the main points outlined in the document. Automatic text
          summarization is a common problem in machine learning and natural
          language processing (NLP).</p>
      </div>
      <div className="Card">
        <h2>What's the Need of Text Summarization?</h2>
        <p>
        Propelled by the modern technological innovations, data is to this
          century what oil was to the previous one. Today, our world is
          parachuted by the gathering and dissemination of huge amounts of data.
          In fact, the International Data Corporation (IDC) projects that the
          total amount of digital data circulating annually around the world
          would sprout from 4.4 zettabytes in 2013 to hit 180 zettabytes in
          2025. That’s a lot of data! With such a big amount of data circulating
          in the digital space, there is need to develop machine learning
          algorithms that can automatically shorten longer texts and deliver
          accurate summaries that can fluently pass the intended messages.
          Furthermore, applying text summarization reduces reading time,
          accelerates the process of researching for information, and increases
          the amount of information that can fit in an area.
       
        </p>
      </div>
      <div className="Card">
        <h2>What are the Main Approaches of Automatic Summarization?</h2>
        <p>

        There are two main types of how to summarize text in NLP:<br></br><br></br>
          <em>Extraction-based summarization:</em> <br></br>The extractive text
          summarization technique involves pulling keyphrases from the source
          document and combining them to make a summary. The extraction is made
          according to the defined metric without making any changes to the
          texts.<br></br>
          <br></br> Here is an example: Source text: Joseph and Mary rode on a
          donkey to attend the annual event in Jerusalem. In the city, Mary gave
          birth to a child named Jesus.<br></br> Extractive summary: Joseph and
          Mary attend event Jerusalem. Mary birth Jesus.<br></br> As you can see
          above, the words in bold have been extracted and joined to create a
          summary — although sometimes the summary can be grammatically strange.
          <br></br>
          <br></br><em>Abstraction-based summarization:</em><br></br> The abstraction
          technique entails paraphrasing and shortening parts of the source
          document. When abstraction is applied for text summarization in deep
          learning problems, it can overcome the grammar inconsistencies of the
          extractive method. The abstractive text summarization algorithms
          create new phrases and sentences that relay the most useful
          information from the original text — just like humans do. Therefore,
          abstraction performs better than extraction. However, the text
          summarization algorithms required to do abstraction are more difficult
          to develop; that’s why the use of extraction is still popular.
          <br></br> Here is an example: Abstractive summary: Joseph and Mary
          came to Jerusalem where Jesus was born.
       
        </p>
      </div>
      <div className="Card">
        <h2>How Does a Text Summarization Algorithm Work?</h2>
        <p>
        Usually, text summarization in NLP is treated as a supervised machine
          learning problem (where future outcomes are predicted based on
          provided data). Typically, here is how using the extraction-based
          approach to summarize texts can work:<br></br><br></br> 1. Introduce a method to extract
          the merited keyphrases from the source document. For example, you can
          use part-of-speech tagging, words sequences, or other linguistic
          patterns to identify the keyphrases. <br></br><br></br>2. Gather text documents with
          positively-labeled keyphrases. The keyphrases should be compatible to
          the stipulated extraction technique. To increase accuracy, you can
          also create negatively-labeled keyphrases.<br></br><br></br> 3. Train a binary machine
          learning classifier to make the text summarization. Some of the
          features you can use include:<br></br>-Length of the keyphrase <br></br>-Frequency of the
          keyphrase <br></br>-The most recurring word in the keyphrase <br></br>-Number of
          characters in the keyphrase <br></br><br></br>4. Finally, in the test phrase, create all
          the keyphrase words and sentences and carry out classification for
          them.
        </p>
      </div>
    </div>
  );
};

export default Proje;
