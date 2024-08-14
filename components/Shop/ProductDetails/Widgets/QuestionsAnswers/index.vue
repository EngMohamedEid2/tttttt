<template>
<div>
  <div class="question-answer skeleton-qa" v-if="skeletonLoader">
    <ul>
      <li v-for="item of skeletonItems" :key="item">
        <div class="question-box">
          <h5></h5>
          <h6 class="font-weight-bold que"></h6>
        </div>
        <div class="answer-box">
          <h5></h5>
          <div>
            <p class="ans"></p>
            <p class="ans"></p>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <div class="post-question-box">
    <h4>
      {{ "Have Doubts Regarding This Product" }} ?
      <a href="javascript:void(0)" @click="(questionanswerModal) => {
        questionModal({ questionanswerModal });
      }
        ">{{ "Post Your Question" }}</a>
    </h4>
  </div>
  <div class="question-answer">
    <ul v-if="questionAnswers?.length">
      <li v-for="(qna, index) of questionAnswers" :key="qna">
        <div class="question-box">
          <h5>{{ "q" }}{{ index + 1 }}</h5>
          <h6 class="font-weight-bold que">{{ qna?.question }}</h6>
          <ul class="link-dislike-box">
            <!-- -->
            <li v-if="!qna?.answer">

              <a href="javascript:void(0)" @click="(questionanswerModal) => {
                questionModal(qna);
              }
                ">
                <span>
                  <Icon name="ri-edit-fill"></Icon>
                </span>
              </a>
            </li>
            <li v-if="qna?.answer">
              <a href="javascript:void(0)" @click="feedback(qna, 'liked'), liked = !liked">
                <span>
                  <Icon :name="qnaID.includes(qna.id)  ? 'ri:thumb-up-fill' : 'ri:thumb-up-line'" />
                  {{ qnaID.includes(qna.id) ? qna.total_likes + 1 : qna.total_likes }}
                </span>
              </a>
            </li>
            <li v-if="qna?.answer">
              <a href="javascript:void(0)" @click="feedback(qna, 'disliked'), disliked = !disliked">
                <span>
                  <Icon :name="qnaunLikeId.includes(qna.id) ? 'ri:thumb-down-fill' : 'ri:thumb-down-line'" />
                  {{ qnaunLikeId.includes(qna.id) ? qna.total_likes + 1 : qna.total_likes }}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="answer-box">
          <div class="answer-box" v-if="qna?.answer">
            <h5>{{ "a" }}{{ index + 1 }}</h5>
            <p class="ans">{{ qna?.answer }}</p>
          </div>
        </div>
      </li>
    </ul>
    <WidgetsNoData :classes="'no-data-added'" :text="'No Question Posted Yet'"
      :description="'There are currently no question for this productoduct'" v-if="!questionAnswers?.length" />
  </div>
  <WidgetsModalsCommon :showModal="questionanswerModal" @close="questionModal({ state: false })">
    <WidgetsModalsQuestionModal :product="product" :qna="qnaObject" @close="questionModal({ state: false })" />
  </WidgetsModalsCommon>
</div>
</template>

<script setup>
let props = defineProps({
  product: Object,
  questionAnswers: Object,
});
let likeUnliked = ref()
let qnaID = ref([])
let qnaObject = ref({})
let qnaunLikeId = ref([])
let feddbackValue = ref('')
let questionanswerModal = ref(false);
const skeletonLoader = ref(true)
let skeletonItems = Array.from({ length: 9 }, (_, index) => index);

function questionModal({qna, state = true}) {
  questionanswerModal.value = state;
  qnaObject.value = qna
}
function feedback(qna, feedback) {
  if (feedback == 'liked') {

    if (qnaID.value.includes(qna.id)) {
      let index = qnaID.value.indexOf(qna.id)
      qnaID.value.splice(index, 1)
      feddbackValue.value = ''
    }
    else {
      qnaID.value.push(qna.id)
      feddbackValue.value = feedback
     if(qnaunLikeId.value.includes(qna.id)){
       let index = qnaunLikeId.value.indexOf(qna.id)
      qnaunLikeId.value.splice(index, 1)
     }
    }
    sendFeedback(qna.id, feedback)
  }
  else if (feedback == 'disliked') {
    if (qnaunLikeId.value.includes(qna.id)) {
      let index = qnaunLikeId.value.indexOf(qna.id)
      qnaunLikeId.value.splice(index, 1)
      feddbackValue.value = ''
    }
    else {
      qnaunLikeId.value.push(qna.id)
      feddbackValue.value = feedback
      if(qnaID.value.includes(qna.id)){
        let index = qnaID.value.indexOf(qna.id)
        qnaID.value.splice(index, 1)
      }

    }
  }
  sendFeedback(qna.id, feedback)
}
async function sendFeedback(id, feedback) {
  let userData = localStorage.getItem('usersAccount')
  if (userData) {
    let { data, error } = await useFetch('question-and-answer/feedback', {
      method: 'post',
      headers: GetHeaders(),
      baseURL: BaseUrl,
      body: {
        question_and_answer_id: id,
        reaction: feedback
      }
    })
  }
}
onMounted(() => {
  setTimeout(() => {
    skeletonLoader.value = false
  }, 2000);
})

</script>
<style lang="scss" scoped></style>
