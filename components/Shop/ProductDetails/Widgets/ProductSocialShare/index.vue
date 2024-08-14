<template>
  <div class="share-option" v-if="product?.social_share && option?.product?.social_share">
    <div class="product-title mt-0">
      <h4>{{ $t('Share it') }}</h4>
    </div>
    <ul class="product-social">
      <li>
        <a href="javascript:void(0)" @click="shareOnFacebook(product.slug)">
          <Icon name="ri:facebook-fill"></Icon>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="shareOnTwitter(product.slug)">
          <Icon name="ri:twitter-fill"></Icon>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="shareOnLinkedIn(product.slug)">
          <Icon name="ri:linkedin-fill"></Icon>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="shareOnWhatsApp(product.slug)">
          <Icon name="ri:whatsapp-fill"></Icon>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="shareViaEmail(product.slug)">
          <Icon name="ri:mail-fill"></Icon>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
let props = defineProps({
  product: Object,
  option: Object
})

const url = ref('http://localhost:3000'); // Replace with your website URL

const shareOnFacebook = (slug) => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url.value + '/product/' + slug)}`;
  window.open(facebookShareUrl, '_blank');
};

const shareOnTwitter = (slug) => {
  const twitterShareUrl = `https://twitter.com/intent/tweet?u=${encodeURIComponent(url.value + '/product/' + slug)}`;
  window.open(twitterShareUrl, '_blank');
};

const shareOnLinkedIn = (slug) => {
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?u=${encodeURIComponent(url.value + '/product/' + slug)}`;
  window.open(linkedInShareUrl, '_blank');
};

const shareOnWhatsApp = (slug) => {
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url.value + '/product/' + slug)}`;
  window.open(whatsappShareUrl, '_blank');
};

const shareViaEmail = (slug) => {
  const subject = 'Check out this awesome product!';
  const body = `I thought you might be interested in this product: ${url.value + '/product/' + slug}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = emailShareUrl;
};
</script>

<style lang="scss" scoped></style>