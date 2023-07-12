import{_ as a,o as s,c as n,V as t}from"./chunks/framework.abf2da00.js";const m=JSON.parse('{"title":"工具 AD","description":"","frontmatter":{},"headers":[],"relativePath":"android/02.android-studio.md","filePath":"android/02.android-studio.md","lastUpdated":1687940634000}'),l={name:"android/02.android-studio.md"},o=t(`<h1 id="工具-ad" tabindex="-1">工具 AD <a class="header-anchor" href="#工具-ad" aria-label="Permalink to &quot;工具 AD&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>直接去官网安装</p><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><p>创建一个空项目，学习kotlin语法。</p><h2 id="新建一个kt文件" tabindex="-1">新建一个kt文件 <a class="header-anchor" href="#新建一个kt文件" aria-label="Permalink to &quot;新建一个kt文件&quot;">​</a></h2><p>学习kotlin语法，直接跑main函数会报错，提示缺少类。所以kt文件需要有一个类对象，才能跑我们main函数。</p><div class="language-kt"><button title="Copy Code" class="copy"></button><span class="lang">kt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;manifest xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    xmlns:tools=&quot;http://schemas.android.com/tools&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;application</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:allowBackup=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:dataExtractionRules=&quot;@xml/data_extraction_rules&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:fullBackupContent=&quot;@xml/backup_rules&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:icon=&quot;@mipmap/ic_launcher&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:label=&quot;@string/app_name&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:roundIcon=&quot;@mipmap/ic_launcher_round&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:supportsRtl=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        android:theme=&quot;@style/Theme.Demo2&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        tools:targetApi=&quot;31&quot; &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;activity android:name=&quot;.MainActivity&quot; android:exported=&quot;true&quot;&gt;&lt;/activity&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/application&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/manifest&gt;</span></span></code></pre></div><p>这里我main函数所在的kt文件的类名是 <code>MainActivity</code>，然后就可以跑main函数了。</p><div class="language-kt"><button title="Copy Code" class="copy"></button><span class="lang">kt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">package com.example.demo2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class MainActivity{}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fun test1(){</span></span>
<span class="line"><span style="color:#A6ACCD;">   val a = 10 + 20</span></span>
<span class="line"><span style="color:#A6ACCD;">   println(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">fun main(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    test1()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>可以看见控制台打印30.</p>`,11),p=[o];function e(i,c,r,d,u,A){return s(),n("div",null,p)}const h=a(l,[["render",e]]);export{m as __pageData,h as default};
