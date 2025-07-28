<script lang="ts">
    import { page } from '$app/state';
    import { Save, ChevronLeft } from 'lucide-svelte';
    import { goto } from '$app/navigation';
    import { createMemo, type Memo } from '../../../lib/db';

    $: id = page.params.id;

    interface UserMemo {
        id: number | string;
        title: string;
        content: string;
    }
    let memo: UserMemo = {
        id: id!,
        title: '',
        content: '',
    }
    const handleSave = async () => {
        console.log(memo);
        if(memo.id === 'new'){
            const newMemo: Memo = {
                title: memo.title,
                content: memo.content,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            }
            await createMemo(newMemo);
            goto('/');
        }
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
</style>