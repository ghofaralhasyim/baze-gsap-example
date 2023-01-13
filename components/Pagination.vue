<template>
	<ul class="pagination">
		<li class="pagination-item">
			<button
				class="btn-arrow"
				type="button"
				:disabled="isInFirstPage"
				aria-label="Go to first page"
				@click="onClickFirstPage"
			>
				<span class="bzi-angle-double-left"></span>
			</button>
		</li>

		<li class="pagination-item">
			<button
				class="btn-arrow"
				type="button"
				:disabled="isInFirstPage"
				aria-label="Go to previous page"
				@click="onClickPreviousPage"
			>
				<span class="bzi-angle-left"></span>
			</button>
		</li>

		<li
			v-for="(page, pi) in pages.filter(p => p.name > 0)"
			:key="pi"
			class="pagination-item"
		>
			<button
				v-if="page.name !== 0"
				class="btn-page"
				type="button"
				:disabled="page.isDisabled"
				:class="{ active: isPageActive(page.name) }"
				:aria-label="`Go to page number ${page.name}`"
				@click="onClickPage(page.name)"
			>
				{{ page.name }}
			</button>
		</li>

		<li class="pagination-item">
			<button
				class="btn-arrow"
				type="button"
				:disabled="isInLastPage"
				aria-label="Go to next page"
				@click="onClickNextPage"
			>
				<span class="bzi-angle-right"></span>
			</button>
		</li>

		<li class="pagination-item">
			<button
				class="btn-arrow"
				type="button"
				:disabled="isInLastPage"
				aria-label="Go to last page"
				@click="onClickLastPage"
			>
				<span class="bzi-angle-double-right"></span>
			</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'Pagination',
	props: {
		maxVisibleButtons: {
			type: Number,
			required: false,
			default: 5
		},
		totalPages: {
			type: Number,
			required: true
		},
		total: {
			type: Number,
			required: true
		},
		perPage: {
			type: Number,
			required: true
		},
		currentPage: {
			type: Number,
			required: true
		}
	},
	computed: {
		startPage() {
			if (this.currentPage === 1) {
				return 1
			}

			if (this.currentPage === this.totalPages) {
				return this.totalPages - this.maxVisibleButtons + 1
			}

			return this.currentPage - 1
		},
		endPage() {
			return Math.min(
				this.startPage + this.maxVisibleButtons - 1,
				this.totalPages
			)
		},
		pages() {
			const range = []

			for (let i = this.startPage; i <= this.endPage; i += 1) {
				range.push({
					name: i,
					isDisabled: i === this.currentPage
				})
			}

			return range
		},
		isInFirstPage() {
			return this.currentPage === 1
		},
		isInLastPage() {
			return this.currentPage === this.totalPages
		}
	},
	methods: {
		onClickFirstPage() {
			this.$emit('pagechanged', 1)
		},
		onClickPreviousPage() {
			this.$emit('pagechanged', this.currentPage - 1)
		},
		onClickPage(page) {
			this.$emit('pagechanged', page)
		},
		onClickNextPage() {
			this.$emit('pagechanged', this.currentPage + 1)
		},
		onClickLastPage() {
			this.$emit('pagechanged', this.totalPages)
		},
		isPageActive(page) {
			return this.currentPage === page
		}
	}
}
</script>

<style lang="scss" scoped>
.pagination {
	.btn-page,
	.btn-arrow {
		background: transparent;
		border: none;
		border-radius: 4px;
		padding: 6px 12px;
		cursor: pointer;
	}

	.btn-arrow span {
		display: inline-block;
		transform: scale(1.5);
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.btn-page {
		color: $black60;
	}

	.btn-page.active {
		background: palette('primary');
		color: #fff;
		opacity: 1;
		box-shadow: 0 0 0 4px palette('primary');
		position: relative;
		z-index: 2;
		// padding-left: 8px;
		// padding-right: 8px;
		margin: 0 3.5px;
	}

	button:hover:not(:disabled) {
		background: rgba($black, 0.1);
		color: palette('primary');
	}
}
.pagination-item {
	// background: $black10;
	margin: 0;

	&:first-child {
		border-radius: 4px 0 0 4px;
	}
	&:last-child {
		border-radius: 0 4px 4px 0;
	}
}
</style>
