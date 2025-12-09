<template>
  <MainLayout>
    <div id="IndexPage" class="max-w-[1350px] mx-auto px-2 ">

      <div 
        v-if="products.length"
        class="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 "
      >
        <div v-for="product in products" :key="product.id" class="h-full">
          <!-- ✅ اسم الكومبوننت متصلح -->
          <ProductComponent :product="product" />
        </div>
      </div>

      <div v-else class="text-center text-gray-500 py-20 ">
        لا توجد منتجات حالياً
      </div>

    </div>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '~/layouts/MainLayout.vue';
import ProductComponent from '~/components/ProductComponent.vue';

// قائمة المنتجات
const products = [
  { id: 1, title: "هاتف ذكي Galaxy S23", description: "أفضل أداء وسعة تخزين ممتازة", url: "/images/product/0.png", price: 9999 },
  { id: 2, title: "سماعات لاسلكية AirPods Pro", description: "صوت واضح وعزل ممتاز للضوضاء", url: "/images/product/1.png", price: 6499 },
  { id: 3, title: "ساعة ذكية Apple Watch", description: "متابعة اللياقة والرسائل بسهولة", url: "/images/product/10.png", price: 9999 },
  { id: 4, title: "لابتوب Dell Inspiron 15", description: "أداء ممتاز للعمل والدراسة", url: "/images/product/11.png", price: 19999 },
  { id: 5, title: "كاميرا كانون EOS", description: "صور احترافية بدقة عالية", url: "/images/product/12.png", price: 3299 },
  { id: 6, title: "تلفزيون ذكي LG 55", description: "تجربة مشاهدة مذهلة بدقة 4K", url: "/images/product/13.png", price: 21599 },
  { id: 7, title: "لوحة مفاتيح ميكانيكية", description: "إضاءة RGB وأزرار سريعة الاستجابة", url: "/images/product/14.png", price: 954 },
  { id: 8, title: "ماوس ألعاب Logitech", description: "دقة عالية وسرعة استجابة ممتازة", url: "/images/product/15.png", price: 569 },
  { id: 9, title: "شاحن سريع Anker", description: "شحن أجهزة متعددة بسرعة وأمان", url: "/images/product/16.png", price: 569 },
  { id: 10, title: "نظارات واقع افتراضي", description: "تجربة ألعاب وغمر كامل للعالم الافتراضي", url: "/images/product/17.png", price: 969 },
  { id: 11, title: "سماعة بلوتوث JBL", description: "صوت قوي ومتانة عالية", url: "/images/product/18.png", price: 589 },
  { id: 12, title: "هاتف ذكي iPhone 14", description: "كاميرا ممتازة وأداء فائق", url: "/images/product/19.png", price: 8220 },
  { id: 13, title: "باور بانك 20000mAh", description: "شحن سريع وعمر بطارية طويل", url: "/images/product/2.png", price: 205 },
  { id: 14, title: "سماعات رأس Bose", description: "عزل ممتاز للضوضاء وصوت نقي", url: "/images/product/20.png", price: 2889 },
  { id: 15, title: "كيبورد لاسلكي", description: "راحة في الكتابة وسهولة في الحمل", url: "/images/product/21.png", price: 58 },
  { id: 16, title: "ماوس لاسلكي", description: "دقة عالية وتوافق مع جميع الأجهزة", url: "/images/product/22.png", price: 68 },
  { id: 17, title: "كاميرا أكشن GoPro", description: "صور وفيديوهات عالية الجودة أثناء الحركة", url: "/images/product/23.png", price: 2648 },
  { id: 18, title: "سماعة ألعاب HyperX", description: "ميكروفون واضح وصوت محيطي", url: "/images/product/24.png", price: 748 },
  { id: 19, title: "هاتف ذكي Xiaomi 12", description: "شاشة AMOLED وأداء ممتاز", url: "/images/product/3.png", price: 648 },
  { id: 20, title: "تابلت سامسونج Galaxy Tab", description: "مثالي للدراسة والترفيه", url: "/images/product/4.png", price: 848 },
  { id: 21, title: "سماعة بلوتوث صغيرة", description: "صغيرة الحجم وصوت نقي", url: "/images/product/5.png", price: 158 },
  { id: 22, title: "هارد خارجي 1TB", description: "تخزين كبير وسرعة نقل عالية", url: "/images/product/6.png", price: 300 },
  { id: 23, title: "كاميرا ويب Full HD", description: "مناسبة للمكالمات والاجتماعات عبر الإنترنت", url: "/images/product/7.png", price: 968 },
  { id: 24, title: "حامل هاتف متعدد الاستخدام", description: "يدعم الهاتف والزوايا المختلفة بسهولة", url: "/images/product/8.png", price: 98 },
  { id: 24, title: " هاتف متعدد الاستخدام", description: "يدعم الهاتف والزوايا المختلفة بسهولة", url: "/images/product/9.png", price: 558 },
]
</script>
