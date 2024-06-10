<template>
  <div class="section-box" id="about">
    <div class="row g-4 g-xl-5">
      <div class="col-12 col-xl-4">
        <!-- Hero Avatar -->
        <div class="hero-avatar">
          <img :src="'frontend/assets/images/avatar-taufiq.webp'" class="img-fluid" alt="taufiq" :width="400" :height="400" style="aspect-ratio: 1/1" />
          <div class="hero-avatar-text">
            <span class="typer text-white" id="typer1" :data-words="typerWords" :data-delay="50" :data-deleteDelay="1500"></span>
            <span class="cursor" data-owner="typer1"></span>
          </div>
        </div>
        <!-- end Hero Avatar -->
      </div>
      <div class="col-12 col-xl-8">
        <h6 class="title-heading mb-4" data-backdrop-text="About Me">About Me</h6>
        <h1>Web Dev. Freelance</h1>
        <ul class="list-inline-pills mt-3">
          <li v-for="(tech, index) in technologies" :key="index">
            <i :class="['fa-brands', tech.iconClass]" :style="{ color: tech.color }"></i> {{ tech.name }}
            <div class="d-inline-block font-family-mono font-small"></div>
          </li>
        </ul>
        <p class="mt-1">Hey, are you looking for a developer to build your Website and grow your business? Let's shake hands with me.</p>
      </div>
    </div>
    <!-- end row -->
    <div class="row g-4 mt-1">
      <div v-for="(stat, index) in stats" :key="index" class="col-12 col-xl-4">
        <div class="d-flex align-items-center">
          <div class="d-inline-block">
            <h1 class="font-family-mono fw-semi-bold stroke-text display-4">
              <span class="counter">{{ stat.value }}</span>
            </h1>
          </div>
          <div class="d-inline-block ps-2">
            <h4 class="line-height-100 fw-normal mb-0">{{ stat.unit }}</h4>
            <p class="mono-heading">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'About',

  setup() {
    const typerWords = ["Hi There!, I'm Taufiq", 'Freelancer Web'];
    const technologies = [
      { name: 'HTML5', iconClass: 'fa-html5', color: 'rgb(227, 78, 38)' },
      { name: 'CSS', iconClass: 'fa-css3-alt', color: 'rgb(38, 77, 228)' },
      { name: 'CI & Laravel', iconClass: 'fa-php', color: 'rgb(8, 0, 122)' },
      { name: 'Node JS', iconClass: 'fa-node', color: 'rgb(4, 122, 0)' },
      { name: 'Wordpress', iconClass: 'fa-wordpress', color: 'rgb(0, 114, 221)' },
      { name: 'Vue JS', iconClass: 'fa-vuejs', color: 'rgb(4, 122, 0)' },
      { name: 'React JS', iconClass: 'fa-react', color: 'rgb(0, 114, 221)' },
      { name: 'Angular', iconClass: 'fa-angular', color: 'rgb(126, 0, 0)' },
    ];
    const stats = [
      { value: 3, unit: '+', label: 'Years of Experience' },
      { value: 12, unit: 'k', label: 'Hours of Working' },
      { value: 10, unit: '+', label: 'Projects Done' },
    ];

    onMounted(() => {
      var Typer = function (a) {
        this.element = a;
        var b = a.dataset.delim || ',',
          c = a.dataset.words || 'override these,sample typing';
        (this.words = c.split(b).filter((a) => a)),
          (this.delay = a.dataset.delay || 200),
          (this.loop = a.dataset.loop || 'true'),
          'false' === this.loop && (this.loop = 1),
          (this.deleteDelay = a.dataset.deletedelay || a.dataset.deleteDelay || 800),
          (this.progress = { word: 0, char: 0, building: !0, looped: 0 }),
          (this.typing = !0);
        var d = a.dataset.colors || 'black';
        (this.colors = d.split(',')), (this.element.style.color = this.colors[0]), (this.colorIndex = 0), this.doTyping();
      };
      (Typer.prototype.start = function () {
        this.typing || ((this.typing = !0), this.doTyping());
      }),
        (Typer.prototype.stop = function () {
          this.typing = !1;
        }),
        (Typer.prototype.doTyping = function () {
          var b,
            d = this.element,
            a = this.progress,
            c = a.word,
            e = a.char,
            f = [...this.words[c]].slice(0, e).join('');
          this.cursor && ((this.cursor.element.style.opacity = '1'), (this.cursor.on = !0), clearInterval(this.cursor.interval), (this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400))),
            (d.innerHTML = f),
            a.building
              ? (b = a.char === this.words[c].length)
                ? (a.building = !1)
                : (a.char += 1)
              : 0 === a.char
              ? ((a.building = !0), (a.word = (a.word + 1) % this.words.length), (this.colorIndex = (this.colorIndex + 1) % this.colors.length), (this.element.style.color = this.colors[this.colorIndex]))
              : (a.char -= 1),
            a.word === this.words.length - 1 && (a.looped += 1),
            !a.building && this.loop <= a.looped && (this.typing = !1),
            setTimeout(
              () => {
                this.typing && this.doTyping();
              },
              b ? this.deleteDelay : this.delay
            );
        });
      var Cursor = function (a) {
        (this.element = a),
          (this.cursorDisplay = a.dataset.cursordisplay || a.dataset.cursorDisplay || '_'),
          (a.innerHTML = this.cursorDisplay),
          (this.on = !0),
          (a.style.transition = 'all 0.1s'),
          (this.interval = setInterval(() => this.updateBlinkState(), 400));
      };
      function TyperSetup() {
        var a = {};
        for (let c of document.getElementsByClassName('typer')) a[c.id] = new Typer(c);
        for (let d of document.getElementsByClassName('typer-stop')) {
          let g = a[d.dataset.owner];
          d.onclick = () => g.stop();
        }
        for (let e of document.getElementsByClassName('typer-start')) {
          let h = a[e.dataset.owner];
          e.onclick = () => h.start();
        }
        for (let f of document.getElementsByClassName('cursor')) {
          let b = new Cursor(f);
          (b.owner = a[f.dataset.owner]), (b.owner.cursor = b);
        }
      }
      Cursor.prototype.updateBlinkState = function () {
        this.on ? ((this.element.style.opacity = '0'), (this.on = !1)) : ((this.element.style.opacity = '1'), (this.on = !0));
      };
      $('.counter').appear(
        function () {
          $(this).each(function () {
            $(this)
              .prop('Counter', 0)
              .animate(
                { Counter: $(this).text() },
                {
                  duration: 3500,
                  easing: 'swing',
                  step: function (e) {
                    $(this).text(Math.ceil(e));
                  },
                }
              );
          });
        },
        { accX: 0, accY: -10 }
      );
      TyperSetup();
    });

    return {
      typerWords,
      technologies,
      stats,
    };
  },
};
</script>
