---
title: 'ASU LLM assistant'
fileName: 'LLMassistant.py'
type: 'py'
image: '/content_img/about/ai-assistant.png'
gitUrl: 'https://github.com/anicolas91/LLM_ASU_assistant'
pageUrl: 'https://llm-asu-assistant.vercel.app/'
---

::hero{:image-src="image" :rounded="true" :gradient="true"}

## ASU LLM assistant

::

::text-box{title="Tech Stacks" :display-border="false" :rounded="true" border-color="light-1"}
<div class="grid grid-cols-2 gap-1">
<p>pandas</p>
<p>scikit-learn</p>
<p>flask</p>
<p>openai</p>
<p>numpy</p>
</div>

::

<ul class="mcl-list mcl-list-warning mb-md">
  <li> This project implements a Retrieval-Augmented Generation (RAG) system to enhance the user experience by allowing users to query ASU Online’s FAQs and receive accurate, concise responses.  </li>
  <li> The RAG system has been deployed via and api and has a website as the user interface. </li>
  <li> We evaluate both retrieval metrics from the search engine and the overall performance of the assistant via cosine similarity. </li>

::flex-container

::git-button{:url="gitUrl"}
::

::button-link{:url="pageUrl"}
Go to deployed page
::

::
