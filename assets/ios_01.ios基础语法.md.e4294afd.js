import{_ as s,o as a,c as n,V as l}from"./chunks/framework.abf2da00.js";const D=JSON.parse('{"title":"基础语法","description":"","frontmatter":{},"headers":[],"relativePath":"ios/01.ios基础语法.md","filePath":"ios/01.ios基础语法.md","lastUpdated":1689131964000}'),p={name:"ios/01.ios基础语法.md"},e=l(`<h1 id="基础语法" tabindex="-1">基础语法 <a class="header-anchor" href="#基础语法" aria-label="Permalink to &quot;基础语法&quot;">​</a></h1><h2 id="接口-类" tabindex="-1">接口 &amp; 类 <a class="header-anchor" href="#接口-类" aria-label="Permalink to &quot;接口 &amp; 类&quot;">​</a></h2><p>一般情况下，我们接口和类是分开在h头文件和m实现文件中。 在ios中，一个接口只能有一个实现类。</p><p>定义一个接口： 比如在<code>MyClass.h</code>头文件。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">@interface</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MyClass</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">成员</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">方法</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">属性等</span></span>
<span class="line"><span style="color:#FFCB6B;">@end</span></span></code></pre></div><p>定义一个接口的实现类： 在<code>MyClass.m</code>文件中：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">@implementation</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MyClass</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">@end</span></span></code></pre></div><h3 id="接口定义类方法" tabindex="-1">接口定义类方法 <a class="header-anchor" href="#接口定义类方法" aria-label="Permalink to &quot;接口定义类方法&quot;">​</a></h3><p>接口定义的类方法定义后，不需要实例化类对象也可以使用。 比如：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">@interface</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MyClass</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">+(void</span><span style="color:#A6ACCD;">) sayHello</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">@end</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--------</span></span>
<span class="line"><span style="color:#FFCB6B;">@implementation</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MyClass</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">+(void</span><span style="color:#A6ACCD;">) sayHello{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">NSLog(@</span><span style="color:#FFCB6B;">&quot;hello!&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#FFCB6B;">@end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--------</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">MyClass sayHello</span><span style="color:#89DDFF;">];</span></span></code></pre></div><h3 id="接口定义实例方法" tabindex="-1">接口定义实例方法 <a class="header-anchor" href="#接口定义实例方法" aria-label="Permalink to &quot;接口定义实例方法&quot;">​</a></h3><p>类对象需要实例化以后才能用。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">@interface</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MyClass:NSObject{</span></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">类变量声明</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">-(void</span><span style="color:#A6ACCD;">)sayHello2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">@end</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#import &lt;Foundation/Foundation.h&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#import &quot;MyClass.h&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">@implementation</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MyClass</span></span>
<span class="line"><span style="color:#FFCB6B;">-(void</span><span style="color:#A6ACCD;">)sayHello2{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">NSLog(@</span><span style="color:#FFCB6B;">&quot;hello !  111&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">@end</span></span></code></pre></div><h3 id="方法调用" tabindex="-1">方法调用 <a class="header-anchor" href="#方法调用" aria-label="Permalink to &quot;方法调用&quot;">​</a></h3><p>没有参数的方法调用形式：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">MyClass sayHello</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>如果是实例方法： 需要先实例化对象：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">MyClass</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">myClass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> [[MyClass </span><span style="color:#C3E88D;">alloc]init]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">myClass sayHello</span><span style="color:#89DDFF;">];</span></span></code></pre></div><p>如果实例化的对象不需要参数，那么也可以使用new。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">MyClass</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">myClass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> [MyClass </span><span style="color:#C3E88D;">new]</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="消息机制" tabindex="-1">消息机制 <a class="header-anchor" href="#消息机制" aria-label="Permalink to &quot;消息机制&quot;">​</a></h2><p>在 Objective-C 中，为了使用一个类生成实例对象，我们需要向该类发送消息。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">消息接收者名称 消息名称 ：消息参数</span><span style="color:#89DDFF;">];</span></span></code></pre></div><p>“消息接收者名称”可以为对象名，也可以为类名，“消息名称”指的是类或对象调用的方法，“消息参数”指的是类或对象调用方法的参数。一般来说，给实例对象发送消息，对应的是调用对象方法；给类发送消息，对应的就是调用类方法。</p><p>如果没有参数，则不需要冒号。</p><p>如果有多个参数，需要每组的参数名，冒号，参数值用空格分割。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">myRectangle setOrigin x:30.0 y:50</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">；</span></span></code></pre></div><h2 id="方法定义" tabindex="-1">方法定义 <a class="header-anchor" href="#方法定义" aria-label="Permalink to &quot;方法定义&quot;">​</a></h2><p>方法定义格式：</p><div class="language-h"><button title="Copy Code" class="copy"></button><span class="lang">h</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">方法类型 (返回值类型)方法名：（参数类型1）参数1:（参数类型2）参数2…；</span></span></code></pre></div><p>方法实现格式：</p><div class="language-h"><button title="Copy Code" class="copy"></button><span class="lang">h</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">方法类型 (返回值类型)方法名：（参数类型1）参数1:（参数类型2）参数2… {}</span></span></code></pre></div><h3 id="举个🌰" tabindex="-1">举个🌰 <a class="header-anchor" href="#举个🌰" aria-label="Permalink to &quot;举个🌰&quot;">​</a></h3><div class="language-h"><button title="Copy Code" class="copy"></button><span class="lang">h</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">//  Calculator.h</span></span>
<span class="line"><span style="color:#A6ACCD;">//  demo</span></span>
<span class="line"><span style="color:#A6ACCD;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">//</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#import &lt;Foundation/Foundation.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">NS_ASSUME_NONNULL_BEGIN</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@interface Calculator : NSObject</span></span>
<span class="line"><span style="color:#A6ACCD;">-(double)pi;</span></span>
<span class="line"><span style="color:#A6ACCD;">-(double)square:(double) number;</span></span>
<span class="line"><span style="color:#A6ACCD;">-(double)sumOfNum1:(double) num1 :(double) num2;</span></span>
<span class="line"><span style="color:#A6ACCD;">@end</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">NS_ASSUME_NONNULL_END</span></span></code></pre></div><div class="language-m"><button title="Copy Code" class="copy"></button><span class="lang">m</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">//  Calculator.m</span></span>
<span class="line"><span style="color:#A6ACCD;">//  demo</span></span>
<span class="line"><span style="color:#A6ACCD;">//</span></span>
<span class="line"><span style="color:#A6ACCD;">//</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#import &quot;Calculator.h&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@implementation Calculator</span></span>
<span class="line"><span style="color:#A6ACCD;">- (double)pi {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 3.14;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- (double)square:(double)number {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return number * number;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- (double)sumOfNum1:(double)num1 :(double)num2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return num1 + num2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@end</span></span></code></pre></div><h2 id="参数调用" tabindex="-1">参数调用 <a class="header-anchor" href="#参数调用" aria-label="Permalink to &quot;参数调用&quot;">​</a></h2><p>无参数方法的调用：</p><div class="language-m"><button title="Copy Code" class="copy"></button><span class="lang">m</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[实例对象 方法名];</span></span>
<span class="line"><span style="color:#A6ACCD;">[c pi];</span></span></code></pre></div><p>调用有参数的方法：</p><div class="language-m"><button title="Copy Code" class="copy"></button><span class="lang">m</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[实例对象 方法名：参数1：参数2…];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[c square: 10];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[c sumOfNum1: 10: 20];</span></span></code></pre></div><h2 id="成员变量" tabindex="-1">成员变量 <a class="header-anchor" href="#成员变量" aria-label="Permalink to &quot;成员变量&quot;">​</a></h2><div class="language-h"><button title="Copy Code" class="copy"></button><span class="lang">h</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@interface A</span></span>
<span class="line"><span style="color:#A6ACCD;">  @public </span></span>
<span class="line"><span style="color:#A6ACCD;">    float a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    float b;</span></span>
<span class="line"><span style="color:#A6ACCD;">@end</span></span></code></pre></div><h2 id="访问成员变量" tabindex="-1">访问成员变量 <a class="header-anchor" href="#访问成员变量" aria-label="Permalink to &quot;访问成员变量&quot;">​</a></h2><p>使用<code>对象 -&gt; 成员属性</code>的形式访问。</p><div class="language-m"><button title="Copy Code" class="copy"></button><span class="lang">m</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">stu-&gt;name = &quot;zs&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">stu-&gt;age = 20;</span></span></code></pre></div><h2 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h2><h3 id="内存管理之-僵尸对象" tabindex="-1">内存管理之 僵尸对象 <a class="header-anchor" href="#内存管理之-僵尸对象" aria-label="Permalink to &quot;内存管理之 僵尸对象&quot;">​</a></h3><p>在OC中，如果对象的引用计数为0的时候，对象在堆空间中开辟的内存会被立刻回收了，此时该对象并不一定会被回收了，比如此时我们某个栈空间的指针还指向这个对象，那么这个指针就称为野指针。</p><h2 id="block语法" tabindex="-1">block语法 <a class="header-anchor" href="#block语法" aria-label="Permalink to &quot;block语法&quot;">​</a></h2><div class="language-objective"><button title="Copy Code" class="copy"></button><span class="lang">objective</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// block 语法 无参数写法</span></span>
<span class="line"><span style="color:#A6ACCD;">typedef void (^OperationFile)(void);</span></span>
<span class="line"><span style="color:#A6ACCD;">OperationFile operationFile = ^{</span></span>
<span class="line"><span style="color:#A6ACCD;">    // plist =&gt; property list</span></span>
<span class="line"><span style="color:#A6ACCD;">    NSMutableDictionary *dict = [NSMutableDictionary dictionaryWithContentsOfFile:@&quot;/Student.plist&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">    NSLog(@&quot;%@&quot;, dict);</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 有参数的block</span></span>
<span class="line"><span style="color:#A6ACCD;">typedef int (^Sum) (int, int);</span></span>
<span class="line"><span style="color:#A6ACCD;">Sum sum = ^(int a, int b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a + b;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 不声明 直接定义使用block</span></span>
<span class="line"><span style="color:#A6ACCD;">int (^sum2) (int, int) = ^(int a, int b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return a + b;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div>`,50),o=[e];function t(c,i,r,C,y,A){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
