<script lang="ts">
    import { page } from '$app/state';
    import { Save, ChevronLeft } from 'lucide-svelte';
    import { goto } from '$app/navigation';

    $: id = page.params.id;

    type Memo = {
        id: number | string;
        title: string;
        content: string;
    }
    let memo: Memo = {
        id: id!,
        title: '',
        content: '',
    }
    const handleSave = async () => {
        console.log(memo);
    }
</script>

<div id="container">
    <div id="top-bar">
        <ChevronLeft onclick={() => goto('/')} />
        <Save onclick={handleSave} />
    </div>
    <input type="text" id="title" placeholder="Title" />
    <textarea id="content" placeholder="Content"></textarea>
</div>

<style>
:global(body) {
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  #container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  #top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
  }
  h1 {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
</style>