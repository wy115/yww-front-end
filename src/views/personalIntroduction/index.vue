<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5 mt-3"
  >
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center"
        >
          About Me &nbsp;
          <div
            class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          ></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center"
      >
        <div class="flex justify-center">
          <img
            class="w-9/12 rounded-full mb-3 fadein-up pict"
            src="https://panshi-on.oss-cn-hangzhou.aliyuncs.com/yunxiaoding-mini/other/common/IDFLLBMA-17115219024863b566a8d925c91990b8486e21b67e871.JPG"
            alt="Foto"
          />
        </div>
        <div class="md:w-7/12">
          <ul class="mb-3 md:mb-7 fadein-left fadeins-1">
            <li
              class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent"
            >
              · Hi! 我是韦耀
            </li>
            <br />
            <li
              class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent"
            >
              · 00后 现居江苏南京
            </li>
            <br />
            <li
              class="bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 text-transparent"
            >
              · 身高184 CM ，体重70kg
            </li>
          </ul>

          <ul class="mb-3 md:mb-7 fadein-left fadeins-2">
            <li
              class="bg-clip-text bg-gradient-to-l from-slate-100 to-amber-300 text-transparent"
            >
              · 2022年毕业于宁波财经学院-计算机科学与技术专业
            </li>
          </ul>
        </div>
      </section>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center"
      >
        <div class="flex justify-center">
          <el-timeline>
            <el-timeline-item center timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>Update Github template</h4>
                <p>Tom committed 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2018/4/2" placement="top">
              Event start
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              Event end
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="flex justify-center">
          <!-- rounded-full -->
          <img
            class="w-9/12 mb-3 fadein-up pict"
            src="https://panshi-on.oss-cn-hangzhou.aliyuncs.com/yunxiaoding-mini/other/common/HHADFBKF-1711531032290119e84834fd183e316bb7643b0c456c7.JPG"
            alt="Foto"
          />
        </div>
      </section>
    </article>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="less">
.fadein-left {
  opacity: 0;
  font-size: 1.1rem;
  line-height: 2.2rem;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.pict {
  box-shadow: 0px 0px 43px -9px rgba(255, 219, 112, 0.44);
}
</style>
